const express = require('express');
const multer = require('multer');
const path = require('path');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const userValidationSchema = require('../validation/userValidation');
const verifyToken = require('../middleware/auth');
const Contact = require('../models/contact');
const nodemailer = require('nodemailer');


const router = express.Router();
const secretKey = process.env.SECRET_KEY || 'secret-123';

// Multer configuration for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });


router.post('/', upload.single('image'), async (req, res) => {

  // Validate request body
  const { error } = userValidationSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });


  // Hashing password before saving
  bcrypt.hash(req.body.password, 10, async (err, hash) => {
    if (err) throw err;

    const newUser = new User({
      ...req.body,
      password: hash,
      image: req.file ? req.file.path : null,
    });

    try {
      // Save the user to the database
      const savedUser = await newUser.save();

      // Generate a JWT token for the new user
      const token = jwt.sign(
        { id: savedUser._id, email: savedUser.email }, // Payload data
        process.env.SECRET_KEY, // Secret key
        { expiresIn: '1h' } // Token expiration time
      );

      res.json({
        user: savedUser,
        token,
      });

      console.log(savedUser);

    } catch (err) {
      res.status(400).json({ error: 'Error: ' + err });
    }
  });
});


router.put('/:id',verifyToken, async (req, res) => {
  try {
      const { id } = req.params;
      const updates = req.body;

      // Check if user exists
      const user = await User.findById(id);
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      // Update the user
      const updatedUser = await User.findByIdAndUpdate(id, updates, {
          new: true, // Return the updated document
          runValidators: true, // Enforce validation rules
      });

      res.status(200).json({ message: 'User updated successfully', data: updatedUser });
  } catch (error) {
      res.status(500).json({ message: 'Error updating user', error: error.message });
  }
});


// User login route with JWT generation
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'Invalid email or password' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid email or password' });

    const token = jwt.sign({ id: user._id }, secretKey, { expiresIn: '2h' });
    res.json({
      token,
      user: {
        id: user._id,
        image: user.image,
        email: user.email,
        name: user.name,
        profession: user.profession,
        aboutMe: user.aboutMe,
        isAdmin: user.isAdmin
      }
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/contact', async (req, res) => {
  try {
    const { name, email, phone, messages } = req.body;
    const userCreated = await Contact.create({ name, email, phone, messages });

    res.status(201).json({ msg: userCreated })
  } catch (error) {
    console.log(error);
  }
});


// Fetch all users (Protected route)
router.get('/', verifyToken, (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.get('/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find(); // Fetch all contacts
    res.json(contacts); // Send the data back as JSON
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve contacts" });
  }
});

router.get('/User/:id', verifyToken, async (req, res) => {
  const profile = await User.findById(req.params.id);

  if (profile) {
    res.json(profile);
  }
  else {
    res.status(404).json({ message: "Profile Has not found" })
  }
})


// delete Contact
router.delete('/contact/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedContact = await Contact.findByIdAndDelete(id);

    if (!deletedContact) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    res.status(200).json({ message: 'Contact deleted successfully', contact: deletedContact });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete contact' });
  }
});


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'harshad.tank119796@marwadiuniversity.ac.in',
    pass: 'mdjh syie iyug pkyf',
  },
});

// Email sending endpoint
router.post('/send-email', async (req, res) => {
  const { email, name, message } = req.body;

  const user = await User.findOne({ email });
  console.log(user.email);

  const mailOptions = {
    from: 'janvipatel@gmail.com',
    to: email,
    subject: `A New Message for You on Matrimony Application`,
    text: `Dear ${name}, 
      Message: "${message}"
          We encourage you to log in to your account on Matrimony Application to view the full details and respond to the message.

      Best Regards,
      The Matrimony Application Team
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    res.status(500).send({ success: false, message: 'Error sending email!' });
  }
});


module.exports = router;
