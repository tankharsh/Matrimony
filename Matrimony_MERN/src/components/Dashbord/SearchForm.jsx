import React, { useState, useEffect } from 'react';
import { getUsers } from '../services/authService'; // Fetch users with token
import EmailStatusPopup from './EmailStatusPopup';

const SearchForm = () => {
  const [ageRange, setAgeRange] = useState('');
  const [salaryRange, setSalaryRange] = useState('');
  const [city, setCity] = useState('');
  const [gender, setGender] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [data, setData] = useState([]);
  const [user, setUser] = useState('');
  const [loggedInUserId, setLoggedInUserId] = useState('');
  const [message, setMessage] = useState('');
  const [popupOpen, setPopupOpen] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);


  const sendEmail = async (email, name, message) => {
    try {
      const response = await fetch('http://localhost:3000/api/users/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          name,
          message,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setStatusMessage('Email sent successfully!');
      } else {
        setStatusMessage('Failed to send email!');
      }
      setPopupOpen(true); // Show the popup
    } catch (error) {
      console.error('Error sending email:', error);
      setStatusMessage('Email Not Sent!');
      setPopupOpen(true);
    }
  };
  const closePopup = () => {
    setPopupOpen(false); // Close the popup
  };

  const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
  // console.log(storedUser.email)
  const handleSendEmail = (selectedUser) => {
    const email = selectedUser.email; // Get the recipient email
    const name = selectedUser.name; // Get the recipient's name
    const messageContent = `${message} FROM ${storedUser.email}` || 'Hello, I would like to get in touch!';

    sendEmail(email, name, messageContent);
  };

  // Fetch data from the API with the token
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getUsers();
        const token = localStorage.getItem('token');
        console.log(token);

        const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
        if (storedUser) {
          setUser(storedUser); // Set the user data in state
          setLoggedInUserId(storedUser.id); // Set logged-in user's ID
        }


        if (Array.isArray(result)) {
          setData(result);
          setFilteredResults(result);
        } else {
          console.error('Unexpected data format:', result);
          setData([]);
          setFilteredResults([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setData([]);
        setFilteredResults([]);
      }
    };

    fetchData();
  }, []);

  // Update the results whenever the filters change
  useEffect(() => {
    filterData();
  }, [ageRange, salaryRange, city, gender, data]);

  const filterData = () => {
    if (!ageRange && !salaryRange && !city && !gender) {
      setFilteredResults(data.filter(user => user._id !== loggedInUserId));
    } else {
      // Apply filters only when any filter is set
      let results = data.filter((person) => {
        const isAgeInRange = !ageRange || checkAgeRange(person.age, ageRange);
        const isSalaryInRange = !salaryRange || checkSalaryRange(person.salary, salaryRange);
        const isCityMatched = !city || person.city.toLowerCase().includes(city.toLowerCase());
        const isGenderMatched = !gender || person.gender === gender;

        return isAgeInRange && isSalaryInRange && isCityMatched && isGenderMatched && person._id !== loggedInUserId;
      });

      setFilteredResults(results);
    }
  };

  const checkAgeRange = (age, range) => {
    const personAge = parseInt(age); // Assuming age is a string, convert to number
    switch (range) {
      case '21-30':
        return personAge >= 21 && personAge <= 30;
      case '31-45':
        return personAge >= 31 && personAge <= 45;
      case '46-60':
        return personAge >= 46 && personAge <= 60;
      default:
        return true;
    }
  };

  const checkSalaryRange = (salary, range) => {
    const personSalary = parseInt(salary); // Assuming salary is a string, convert to number
    switch (range) {
      case '0-10000':
        return personSalary >= 0 && personSalary <= 10000;
      case '10000-50000':
        return personSalary > 10000 && personSalary <= 50000;
      case '50000-100000':
        return personSalary > 50000 && personSalary <= 100000;
      case 'above-100000':
        return personSalary > 100000;
      default:
        return true;
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isModalOpen]);

  const openModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Search for Matches</h2>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {/* Age Dropdown */}
          <select
            value={ageRange}
            onChange={(e) => setAgeRange(e.target.value)}
            className="border border-gray-300 p-2 rounded w-full md:w-64"
          >
            <option value="">Select Age Range</option>
            <option value="21-30">21-30</option>
            <option value="31-45">31-45</option>
            <option value="46-60">46-60</option>
          </select>

          {/* Salary Dropdown */}
          <select
            value={salaryRange}
            onChange={(e) => setSalaryRange(e.target.value)}
            className="border border-gray-300 p-2 rounded w-full md:w-64"
          >
            <option value="">Select Salary Range</option>
            <option value="0-10000">0-10,000</option>
            <option value="10000-50000">10,000-50,000</option>
            <option value="50000-100000">50,000-100,000</option>
            <option value="above-100000">Above 100,000</option>
          </select>

          {/* City Input Box */}
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter City"
            className="border border-gray-300 p-2 rounded w-full md:w-64"
          />
        </div>

        {/* Gender Radio Buttons */}
        <div className="flex gap-4 mb-6">
          <label className="flex items-center gap-2">
            <span>Gender</span>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={gender === 'Male'}
              onChange={(e) => setGender(e.target.value)}
            />
            Male
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={gender === 'Female'}
              onChange={(e) => setGender(e.target.value)}
            />
            Female
          </label>
        </div>
      </div>

      {/* Display Filtered Results  */}
      <div className="bg-gray-100 min-h-screen p-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Section */}
          <div className="bg-white h-[600px]  rounded-lg shadow-lg p-6 lg:col-span-1 flex flex-col items-center">
            <div className="text-2xl font-bold mb-6 text-center">Profile</div>
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
              <img
                src={`http://localhost:3000/${user.image}`}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold mt-4">{user.name}</h2>
            <p className="text-gray-600 text-lg">{user.email}</p>
            <p className="text-gray-600 text-lg">{user.profession}</p>
            <div className="mt-6 text-center">
              <h3 className="text-lg font-semibold mb-2">About Me</h3>
              <p className="text-gray-700 mb-3">
                {user.aboutMe}
              </p>
            </div>
          </div>

          {/* Other Users Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Explore Matrimony Profiles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredResults.length > 0 ? (
                filteredResults.map((user, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 border border-gray-200 rounded-lg shadow-lg p-4 flex flex-col items-center"
                  >
                    <div className="w-40 h-40 rounded-lg overflow-hidden shadow-md">
                      <img
                        src={`http://localhost:3000/${user.image}`}
                        alt={user.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-bold mt-4">{user.name}</h3>
                    <p className="text-gray-600">Age: {user.age}</p>
                    <p className="text-gray-600">{user.email}</p>

                    <p className="text-gray-600">{user.profession}</p>
                    <p className="text-gray-600">{user.city}</p>

                    <button
                      onClick={() => openModal(user)}
                      className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700"
                    >
                      View Profile
                    </button>
                  </div>
                ))
              ) : (
                <p className="mt-4 text-red-500">No results found</p>
              )}
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && selectedUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={closeModal}
          ></div>
          <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/4 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 p-2 rounded-full right-2 bg-red-600 text-white hover:text-gray-700"
            >
              X
            </button>
            <div className="">
              <div className="w-40 h-40 rounded-lg overflow-hidden mx-auto">
                <img
                  src={`http://localhost:3000/${selectedUser.image}`}
                  alt={selectedUser.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl font-bold mt-4 mb-2"><span className='font-bold'>Name: </span>{selectedUser.name}</h2>
              <p><span className='font-bold'>Email</span> {selectedUser.email}</p>
              <p><span className='font-bold'>Age:</span> {selectedUser.age}</p>
              <p><span className='font-bold'>Profession:</span> {selectedUser.profession}</p>
              <p><span className='font-bold'>City:</span> {selectedUser.city}</p>
              <p><span className='font-bold'>About:</span>{selectedUser.aboutMe}</p>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write a message..."
                className="p-2 border rounded mt-2 border-black"
                cols={39}
              />
              <button
                onClick={() => handleSendEmail(selectedUser)}
                className="mt-4 bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700"
              >
                Send Email
              </button>
            </div>
          </div>
        </div>
      )}

      <EmailStatusPopup
        isOpen={popupOpen}
        statusMessage={statusMessage}
        onClose={closePopup}
      />
    </div>
  );
};

export default SearchForm;

