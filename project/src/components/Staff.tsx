import { useState } from 'react';

// Staff Data Type
type StaffMember = {
  id: number;
  name: string;
  email: string;
  permanentAddress: string;
  gender: string;
  phoneNumber: string;
  dateOfBirth: string;
  role: string;
  salary: string;
  availability: string;
  photo: string; // URL to the staff member's photo
};

const Staff = () => {
  const [showForm, setShowForm] = useState(false);
  const [staffList, setStaffList] = useState<StaffMember[]>([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      permanentAddress: '123 Main St',
      gender: 'Male',
      phoneNumber: '123-456-7890',
      dateOfBirth: '1980-01-01',
      role: 'Therapist',
      salary: '$3,000',
      availability: 'Full-time',
      photo: 'https://via.placeholder.com/50',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      permanentAddress: '456 Elm St',
      gender: 'Female',
      phoneNumber: '987-654-3210',
      dateOfBirth: '1990-05-05',
      role: 'Receptionist',
      salary: '$2,500',
      availability: 'Part-time',
      photo: 'https://via.placeholder.com/50',
    },
  ]);

  const [currentStaff, setCurrentStaff] = useState<StaffMember | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const toggleForm = (staff?: StaffMember) => {
    setCurrentStaff(
      staff ? { ...staff } : {
        id: 0,
        name: '',
        email: '',
        permanentAddress: '',
        gender: '',
        phoneNumber: '',
        dateOfBirth: '',
        role: '',
        salary: '',
        availability: '',
        photo: '',
      }
    );
    setImagePreview(null);
    setShowForm(!showForm);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (currentStaff) {
      // Updating existing staff member
      setStaffList(staffList.map((staff) =>
        staff.id === currentStaff.id ? { ...currentStaff, photo: imagePreview || staff.photo } : staff
      ));
    } else {
      // Adding new staff member
      const newStaff: StaffMember = {
        id: staffList.length + 1,
        name: (e.currentTarget.elements.namedItem('staffName') as HTMLInputElement).value,
        email: (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value,
        permanentAddress: (e.currentTarget.elements.namedItem('permanentAddress') as HTMLInputElement).value,
        gender: (e.currentTarget.elements.namedItem('gender') as HTMLInputElement).value,
        phoneNumber: (e.currentTarget.elements.namedItem('phoneNumber') as HTMLInputElement).value,
        dateOfBirth: (e.currentTarget.elements.namedItem('dateOfBirth') as HTMLInputElement).value,
        role: (e.currentTarget.elements.namedItem('staffRole') as HTMLInputElement).value,
        salary: (e.currentTarget.elements.namedItem('salary') as HTMLInputElement).value,
        availability: (e.currentTarget.elements.namedItem('availability') as HTMLInputElement).value,
        photo: imagePreview || 'https://via.placeholder.com/50',
      };
      setStaffList([...staffList, newStaff]);
    }

    setShowForm(false);
    setCurrentStaff(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (currentStaff) {
      const { id, value } = e.target;
      setCurrentStaff({ ...currentStaff, [id]: value });
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        if (currentStaff) {
          setCurrentStaff({ ...currentStaff, photo: reader.result as string });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const deleteStaff = (id: number) => {
    setStaffList(staffList.filter((staff) => staff.id !== id));
  };

  return (
    <div className="relative p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Staff Information</h2>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={toggleForm}
        >
          Add Staff
        </button>
      </div>

      <div className="mt-4 bg-pink-500 h-36 flex flex-col justify-center p-4">
        <label htmlFor="search" className="text-sm text-white font-bold mb-2">
          Search for staff members
        </label>
        <input
          type="text"
          id="search"
          placeholder="Search staff..."
          className="border border-gray-300 rounded-md p-2"
        />
      </div>

      {showForm && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-10"></div>
          <div className="absolute top-0 left-0 right-0 mt-4 p-4 border border-gray-300 rounded bg-white z-20">
            <h3 className="text-lg mb-2 text-[#F05F97] font-extrabold">
              {currentStaff ? 'Edit Staff' : 'Add New Staff'}
            </h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
              {['staffName', 'email', 'permanentAddress', 'gender', 'phoneNumber', 'dateOfBirth', 'staffRole', 'salary', 'availability'].map((field, index) => (
                <div className="mb-4" key={index}>
                  <label htmlFor={field} className="block text-sm font-medium mb-1">
                    {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                  </label>
                  <input
                    type={field === 'dateOfBirth' ? 'date' : 'text'}
                    id={field}
                    value={currentStaff?.[field] || ''}
                    onChange={handleInputChange}
                    placeholder={`Enter ${field}`}
                    className="border border-gray-300 rounded-md p-2 w-full"
                  />
                </div>
              ))}
              <div className="mb-4">
                <label htmlFor="photo" className="block text-sm font-medium mb-1">
                  Photo
                </label>
                <input
                  type="file"
                  accept="image/*"
                  id="photo"
                  onChange={handleImageChange}
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
                {imagePreview && <img src={imagePreview} alt="Preview" className="mt-2 h-16 w-16 rounded" />}
              </div>
              <div className="col-span-2 flex justify-between">
                <button
                  type="submit"
                  className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                >
                  {currentStaff ? 'Update Staff' : 'Add Staff'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="ml-2 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </>
      )}

      <div className="mt-4">
        {staffList.map((staff) => (
          <div key={staff.id} className="flex items-center border-b py-2">
            <img src={staff.photo} alt={staff.name} className="h-16 w-16 rounded-full mr-4" />
            <div className="flex-1">
              <h3 className="text-lg font-bold">{staff.name}</h3>
              <p className="text-gray-600">{staff.email}</p>
            </div>
            <button
              className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
              onClick={() => deleteStaff(staff.id)}
            >
              Delete
            </button>
            <button
              className="ml-2 bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600"
              onClick={() => toggleForm(staff)}
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Staff;
