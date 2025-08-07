import React, { useEffect, useState } from 'react'
import ProgressBar from '@ramonak/react-progress-bar'

const mockResponse = {
  courses: [
    {
      id: 1,
      courseName: 'Advanced JavaScript',
      courseDescription: 'Deep dive into closures, async/await, and ES6+ features.',
      thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlUSsOLzuOooqTbWj5PKgbZUW_e_TFWteJnQ&s',
      totalDuration: '6h 10m',
      progressPercentage: 45,
    },
    {
      id: 2,
      courseName: 'React for Beginners',
      courseDescription: 'Learn the basics of React including components, hooks, and state.',
      thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvXJ2ffFE_UcX8ecns0ietg3jltxMpnbqz-A&s',
      totalDuration: '4h 30m',
      progressPercentage: 60,
    },
    {
        id: 3,
        courseName: 'Node.js Fundamentals',
        courseDescription: 'Understand the core concepts of Node.js and build server-side applications.',
        thumbnail: 'https://www.mindrops.com/images/nodejs-image.webp',  
        totalDuration: '6h 20m',
        progressPercentage: 20,       
    },
    {
        id: 4,
        courseName: 'Node.js Fundamentals',
        courseDescription: 'Understand the core concepts of Node.js and build server-side applications.',
        thumbnail: 'https://www.mindrops.com/images/nodejs-image.webp',  
        totalDuration: '6h 20m',
        progressPercentage: 20,       
    },
    
  ],
  courseProgress: {},
}

const EnrolledCourses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState(null)
  const [loading, setLoading] = useState(false)

  const getEnrolledCourses = async () => {
    setLoading(true)

    // Simulate delay like a real API
    setTimeout(() => {
      setEnrolledCourses(mockResponse.courses)
      setLoading(false)
    }, 1000)
  }

  useEffect(() => {
    getEnrolledCourses()
  }, [])

  if (loading) {
    return (
      <div className='flex h-[calc(100vh)] w-full justify-center items-center'>
        <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-richblack-500'></div>
      </div>
    )
  }

  return (
    <div className='text-black w-full max-w-[1000px] mx-auto px-4 py-8'>
      <h1 className='text-2xl font-bold mb-6'>Enrolled Courses</h1>
      {
        !enrolledCourses ? (
          <div>Loading....</div>
        ) : enrolledCourses.length === 0 ? (
          <p>You have not enrolled in any courses yet.</p>
        ) : (
          <div className='space-y-6'>
            {
              enrolledCourses.map((course) => (
                <div key={course.id} className='flex flex-col md:flex-row justify-between items-start md:items-center bg-richblack-800 p-8 rounded-md shadow-2xl
                 border-gray-400 border hover:scale-105 transition-transform duration-300 '>
                  <div className='flex items-center gap-4'>
                    <img src={course.thumbnail} alt={course.courseName} className='w-32 h-24 object-cover rounded-md' />
                    <div>
                      <p className='text-lg font-semibold'>{course.courseName}</p>
                      <p className='text-sm text-richblack-300 lg:w-96'>{course.courseDescription}</p>
                    </div>
                  </div>
                  <div className='text-center mt-4 md:mt-0 gap-3'>
                    <p className='text-sm text-richblack-400 font-bold '>Duration:</p>
                    <p>{course.totalDuration}</p>
                  </div>
                  <div className='w-full md:w-1/3 mt-4 md:mt-0 mr-4 text-center gap-3 '>
                    <p className='text-sm text-richblack-400 mb-1 font-medium'>
                      Progress: {course.progressPercentage || 0}%
                    </p>
                    <ProgressBar completed={course.progressPercentage || 0} bgColor="#22c55e" baseBgColor="gray" />
                  </div>
                </div>
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default EnrolledCourses
