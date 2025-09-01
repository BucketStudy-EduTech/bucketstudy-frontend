import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';

// --- LOCALSTORAGE SIMULATION ---
// In a real app, this data would come from a secure backend API.
const USER_ACCOUNT_KEY = 'userAccount';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const staticAvatar = 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg';
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [confirmationText, setConfirmationText] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // For showing errors

  // --- LOCALSTORAGE SIMULATION ---
  // On component mount, check for an account in localStorage or create a new one.
  useEffect(() => {
    let account = JSON.parse(localStorage.getItem(USER_ACCOUNT_KEY));
    
    if (!account) {
      console.log("No account found. Creating a default user with password 'password123'.");
      account = {
        name: 'Neha Patil',
        email: 'example@123.com',
        password: 'password123',
      };
      localStorage.setItem(USER_ACCOUNT_KEY, JSON.stringify(account)); 
    }
    
    setName(account.name);
    setEmail(account.email);
  }, []);

  // Corrected useEffect to handle theme changes properly
  useEffect(() => {
    const root = window.document.documentElement;
    // This is the key fix: remove both classes before adding the new one.
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]); // This hook now correctly depends on the theme state
  
  // Effect to clear success/error messages after 3 seconds
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(''), 3000);
      return () => clearTimeout(timer);
    }
    if (errorMessage) {
      const timer = setTimeout(() => setErrorMessage(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage, errorMessage]);

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    try {
      const account = JSON.parse(localStorage.getItem(USER_ACCOUNT_KEY));
      account.name = name;
      localStorage.setItem(USER_ACCOUNT_KEY, JSON.stringify(account));
      setSuccessMessage('Profile changes saved successfully!');
    } catch (error) {
      setErrorMessage('Failed to save profile changes.');
      console.error(error);
    }
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setErrorMessage("New passwords don't match!");
      return;
    }
    if (!newPassword || newPassword.length < 6) {
      setErrorMessage("New password must be at least 6 characters long.");
      return;
    }

    try {
      const account = JSON.parse(localStorage.getItem(USER_ACCOUNT_KEY));
      if (account.password !== currentPassword) {
        setErrorMessage('Incorrect current password.');
        return;
      }

      account.password = newPassword;
      localStorage.setItem(USER_ACCOUNT_KEY, JSON.stringify(account));
      
      setSuccessMessage('Password updated successfully!');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      
    } catch (error) {
      setErrorMessage('Failed to update password.');
      console.error(error);
    }
  };

  // CORRECTED THEME TOGGLE FUNCTION
  const handleThemeToggle = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  const handleDeleteAccount = () => {
    if (confirmationText === 'delete my account') {
      localStorage.removeItem(USER_ACCOUNT_KEY);
      localStorage.removeItem('theme');
      alert('Your account has been deleted. The page will now reload.');
      window.location.reload();
    } else {
      setErrorMessage('Please type "delete my account" to confirm.');
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'general':
        return (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <Avatar className="h-24 w-24 rounded-full overflow-hidden flex-shrink-0 shadow-lg">
                <AvatarImage src={staticAvatar} alt="User Avatar" className="object-cover h-full w-full" />
                <AvatarFallback className="flex items-center justify-center h-full w-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300">NP</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Profile Photo</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  This will be displayed on your profile.
                </p>
              </div>
            </div>
            <form onSubmit={handleProfileUpdate} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 transition-colors duration-200"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  disabled
                  className="mt-1 block w-full rounded-md border-gray-200 dark:border-gray-700 bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed shadow-sm sm:text-sm p-3"
                />
                 <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                  Email cannot be changed in this demo.
                </p>
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md"
              >
                Save Changes
              </button>
            </form>
          </div>
        );

      case 'security':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Change Password</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Update your password to ensure your account is secure. The default password is <strong className="font-mono text-gray-700 dark:text-gray-300">password123</strong>.
              </p>
            </div>
            <form onSubmit={handlePasswordChange} className="space-y-4">
              <div>
                <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Current Password</label>
                <input
                  type="password"
                  id="currentPassword"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 transition-colors duration-200"
                />
              </div>
              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">New Password</label>
                <input
                  type="password"
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 transition-colors duration-200"
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Confirm New Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 transition-colors duration-200"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md"
              >
                Change Password
              </button>
            </form>
          </div>
        );

      case 'appearance':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Theme</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Switch between light and dark mode. Your preference is saved.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="font-medium text-gray-700 dark:text-gray-300">Light</span>
              <button
                onClick={handleThemeToggle}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${
                  theme === 'dark' ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                }`}
                role="switch"
                aria-checked={theme === 'dark'}
              >
                <span
                  aria-hidden="true"
                  className={`${
                    theme === 'dark' ? 'translate-x-5' : 'translate-x-0'
                  } inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
                />
              </button>
              <span className="font-medium text-gray-700 dark:text-gray-300">Dark</span>
            </div>
          </div>
        );

      case 'delete':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-red-600 dark:text-red-500">Delete Account</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                <strong className="text-gray-700 dark:text-gray-300">Warning:</strong> This action is irreversible. All your data will be permanently deleted from this browser.
              </p>
            </div>
            <div className="p-6 bg-red-50/50 dark:bg-red-950/20 border border-red-500/50 rounded-lg">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200">Confirmation Required</h4>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                To confirm, please type "<strong className="text-red-600 dark:text-red-500">delete my account</strong>" in the box below.
              </p>
              <input
                type="text"
                value={confirmationText}
                onChange={(e) => setConfirmationText(e.target.value)}
                className="mt-3 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm p-3"
                placeholder="delete my account"
              />
            </div>
            <button
              onClick={handleDeleteAccount}
              disabled={confirmationText !== 'delete my account'}
              className={`w-full sm:w-auto px-6 py-3 font-semibold rounded-lg transition-colors duration-200 shadow-md ${
                confirmationText === 'delete my account'
                  ? 'bg-red-600 text-white hover:bg-red-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400'
              }`}
            >
              Delete Account Permanently
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  const menuItems = [
    { id: 'general', label: 'General' },
    { id: 'security', label: 'Security' },
    { id: 'appearance', label: 'Appearance' },
    { id: 'delete', label: 'Delete Account' },
  ];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 dark:bg-gray-300 text-gray-900 dark:text-gray-500 p-4 sm:p-8 font-sans"
    >
      {/* Pop-up for Success Message */}
      <AnimatePresence>
        {successMessage && (
          <motion.div
            initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }}
            className="fixed top-5 sm:top-8 left-1/2 -translate-x-1/2 p-4 rounded-lg bg-green-500 text-white font-medium shadow-xl z-50 text-sm"
          >
            {successMessage}
          </motion.div>
        )}
      </AnimatePresence>
      {/* Pop-up for Error Message */}
      <AnimatePresence>
        {errorMessage && (
          <motion.div
            initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }}
            className="fixed top-5 sm:top-8 left-1/2 -translate-x-1/2 p-4 rounded-lg bg-red-600 text-white font-medium shadow-xl z-50 text-sm"
          >
            {errorMessage}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
        <div className="md:flex">
          <aside className="w-full md:w-72 bg-gray-100 dark:bg-gray-500 p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-200  flex-shrink-0">
            <h2 className="text-amber-50 text-2xl font-bold mb-8 ">Settings</h2>
            <nav>
              <ul>
                {menuItems.map((item) => (
                  <li key={item.id} className="mb-2">
                    <button
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full text-left py-3 px-5 rounded-xl font-medium transition-all duration-300 text-base ${
                        activeTab === item.id
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800'
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
          <main className="flex-1 p-6 sm:p-10">
            <h1 className="text-3xl font-extrabold mb-6 text-gray-800 dark:text-white">
              {menuItems.find((item) => item.id === activeTab)?.label}
            </h1>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </motion.div>
  );
};

export default SettingsPage;