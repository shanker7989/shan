import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Lock, Zap, CheckCircle, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const ResetPassword: React.FC = () => {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [passwordValidation, setPasswordValidation] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false
  });
  const { updatePassword } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (error) setError('');

    // Validate password in real-time
    if (name === 'password') {
      setPasswordValidation({
        length: value.length >= 8,
        uppercase: /[A-Z]/.test(value),
        lowercase: /[a-z]/.test(value),
        number: /\d/.test(value),
        special: /[!@#$%^&*(),.?":{}|<>]/.test(value)
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const isPasswordValid = Object.values(passwordValidation).every(Boolean);
    if (!isPasswordValid) {
      setError('Password does not meet security requirements');
      return;
    }

    setIsLoading(true);
    
    try {
      await updatePassword(formData.password);
      navigate('/login', { 
        state: { 
          message: 'Password updated successfully! Please login with your new password.' 
        }
      });
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const isPasswordValid = Object.values(passwordValidation).every(Boolean);
  const isFormValid = isPasswordValid && formData.password === formData.confirmPassword;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link to="/" className="flex items-center justify-center space-x-2 mb-6">
            <div className="bg-blue-900 p-3 rounded-lg">
              <Zap className="h-8 w-8 text-yellow-400" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-blue-900">Falcon</h1>
              <p className="text-sm text-gray-600 -mt-1">LIFESTYLE</p>
            </div>
          </Link>
          <h2 className="text-3xl font-bold text-gray-900">Reset Password</h2>
          <p className="mt-2 text-gray-600">Enter your new password</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                New Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter new password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
              
              {/* Password Requirements */}
              <div className="mt-2 space-y-1">
                <p className="text-sm text-gray-600 mb-2">Password must contain:</p>
                <div className="grid grid-cols-1 gap-1 text-xs">
                  <div className={`flex items-center ${passwordValidation.length ? 'text-green-600' : 'text-gray-400'}`}>
                    {passwordValidation.length ? <CheckCircle className="h-3 w-3 mr-1" /> : <X className="h-3 w-3 mr-1" />}
                    At least 8 characters
                  </div>
                  <div className={`flex items-center ${passwordValidation.uppercase ? 'text-green-600' : 'text-gray-400'}`}>
                    {passwordValidation.uppercase ? <CheckCircle className="h-3 w-3 mr-1" /> : <X className="h-3 w-3 mr-1" />}
                    One uppercase letter
                  </div>
                  <div className={`flex items-center ${passwordValidation.lowercase ? 'text-green-600' : 'text-gray-400'}`}>
                    {passwordValidation.lowercase ? <CheckCircle className="h-3 w-3 mr-1" /> : <X className="h-3 w-3 mr-1" />}
                    One lowercase letter
                  </div>
                  <div className={`flex items-center ${passwordValidation.number ? 'text-green-600' : 'text-gray-400'}`}>
                    {passwordValidation.number ? <CheckCircle className="h-3 w-3 mr-1" /> : <X className="h-3 w-3 mr-1" />}
                    One number
                  </div>
                  <div className={`flex items-center ${passwordValidation.special ? 'text-green-600' : 'text-gray-400'}`}>
                    {passwordValidation.special ? <CheckCircle className="h-3 w-3 mr-1" /> : <X className="h-3 w-3 mr-1" />}
                    One special character
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm New Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Confirm new password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
              {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                <p className="mt-1 text-sm text-red-600">Passwords do not match</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading || !isFormValid}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Updating Password...' : 'Update Password'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;