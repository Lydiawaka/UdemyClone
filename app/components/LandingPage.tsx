import Image from "next/image"
import Link from "next/link"
import { Search, ShoppingCart, Bell, Globe, Star, Clock, Users, Play, ChevronRight, BookOpen } from "lucide-react"

export default function LandingPage() {
  const categories = [
    "Development",
    "Business",
    "Finance & Accounting",
    "IT & Software",
    "Office Productivity",
    "Personal Development",
    "Design",
    "Marketing",
    "Lifestyle",
    "Photography & Video",
    "Health & Fitness",
    "Music",
  ]

  const featuredCourses = [
    {
      id: 1,
      title: "The Complete JavaScript Course 2024: From Zero to Expert!",
      instructor: "Jonas Schmedtmann",
      rating: 4.7,
      reviews: 285847,
      price: 84.99,
      originalPrice: 199.99,
      image: "/images/javascript.jpg",
      bestseller: true,
      duration: "69 total hours",
      students: 850000,
    },
    {
      id: 2,
      title: "React - The Complete Guide 2024 (incl. React Router & Redux)",
      instructor: "Maximilian Schwarzmüller",
      rating: 4.6,
      reviews: 198543,
      price: 74.99,
      originalPrice: 189.99,
      image: "/images/webdper.jpg",
      bestseller: true,
      duration: "48 total hours",
      students: 720000,
    },
    {
      id: 3,
      title: "Python for Data Science and Machine Learning Bootcamp",
      instructor: "Jose Portilla",
      rating: 4.5,
      reviews: 156789,
      price: 79.99,
      originalPrice: 179.99,
      image: "/images/pythonq.jpg",
      bestseller: false,
      duration: "25 total hours",
      students: 450000,
    },
    {
      id: 4,
      title: "The Web Developer Bootcamp 2024",
      instructor: "Colt Steele",
      rating: 4.8,
      reviews: 267891,
      price: 69.99,
      originalPrice: 159.99,
      image: "/images/webdvlp.jpg",
      bestseller: true,
      duration: "63 total hours",
      students: 890000,
    },
  ]

  const instructors = [
    {
      name: "Jonas Schmedtmann",
      title: "Web Developer, Designer, and Teacher",
      students: "1,500,000+",
      courses: 5,
      rating: 4.7,
      avatar: "/images/webdper.jpg",
    },
    {
      name: "Maximilian Schwarzmüller",
      title: "Professional Web Developer & Instructor",
      students: "2,800,000+",
      courses: 45,
      rating: 4.6,
      avatar: "/illustration.jpg",
    },
    {
      name: "Angela Yu",
      title: "Developer and Lead Instructor",
      students: "3,200,000+",
      courses: 8,
      rating: 4.8,
      avatar: "/images/webdvlp.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="text-2xl font-bold text-purple-600">Udemy Clone</div>
            </Link>

            {/* Categories */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="#" className="text-gray-700 hover:text-purple-600 font-medium">
                Categories
              </Link>
            </nav>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8 hidden md:block">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  className="pl-10 pr-4 py-2 w-full border-2 border-gray-900 rounded-full focus:border-purple-600 focus:outline-none"
                  type="search"
                  placeholder="Search for anything"
                />
              </div>
            </div>

            {/* Right Navigation */}
            <div className="flex items-center space-x-4">
              <Link href="#" className="hidden lg:block text-gray-700 hover:text-purple-600 font-medium">
                Udemy Business
              </Link>
              <Link href="#" className="hidden lg:block text-gray-700 hover:text-purple-600 font-medium">
                Teach on Udemy
              </Link>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors variant=&quot;ghost&quot; size=&quot;sm&quot;">
                <ShoppingCart className="w-5 h-5" />
              </button>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors variant=&quot;ghost&quot; size=&quot;sm&quot;">
                <Bell className="w-5 h-5" />
              </button>
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                <span className="text-sm font-medium">U</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Learn without limits</h1>
              <p className="text-xl text-gray-600 mb-8">
                Start, switch, or advance your career with more than 5,000 courses, Professional Certificates, and
                degrees from world-class universities and companies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors size=&quot;lg&quot; className=&quot;bg-purple-600 hover:bg-purple-700&quot;">
                  Get started
                </button>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors variant=&quot;outline&quot; size=&quot;lg&quot;">
                  <Play className="w-4 h-4 mr-2" />
                  Watch demo
                </button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/illustration.jpg"
                alt="Learning illustration"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Top categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Link
                key={index}
                href="#"
                className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow text-center"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-medium text-gray-900 text-sm">{category}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured courses</h2>
            <Link href="#" className="text-purple-600 hover:text-purple-700 font-medium flex items-center">
              See all <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {course.bestseller && (
                    <span className="absolute top-2 left-2 bg-yellow-400 text-yellow-900 px-2 py-1 text-xs font-semibold rounded">
                      Bestseller
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{course.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{course.instructor}</p>
                  <div className="flex items-center mb-2">
                    <span className="text-yellow-500 font-semibold mr-1">{course.rating}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(course.rating) ? "text-yellow-500 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-1">({course.reviews.toLocaleString()})</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="mr-4">{course.duration}</span>
                    <Users className="w-4 h-4 mr-1" />
                    <span>{course.students.toLocaleString()} students</span>
                  </div>
                </div>
                <div className="p-4 pt-0">
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <span className="text-lg font-bold text-gray-900">${course.price}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">${course.originalPrice}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Instructors */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Top instructors</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <div key={index} className="text-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center mx-auto mb-4">
                    <span className="text-sm font-medium">U</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{instructor.name}</h3>
                  <p className="text-gray-600 mb-4">{instructor.title}</p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center justify-center">
                      <Users className="w-4 h-4 mr-2" />
                      {instructor.students} students
                    </div>
                    <div className="flex items-center justify-center">
                      <BookOpen className="w-4 h-4 mr-2" />
                      {instructor.courses} courses
                    </div>
                    <div className="flex items-center justify-center">
                      <Star className="w-4 h-4 mr-2 text-yellow-500 fill-current" />
                      {instructor.rating} rating
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Transform your life through education</h2>
            <p className="text-xl text-purple-100">
              Learners around the world are launching new careers, advancing in their fields, and enriching their lives.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">57M</div>
              <div className="text-purple-100">Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">213K</div>
              <div className="text-purple-100">Courses</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">57K</div>
              <div className="text-purple-100">Instructors</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">190</div>
              <div className="text-purple-100">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-purple-400 mb-4">Udemy</div>
              <div className="flex space-x-4">
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors variant=&quot;ghost&quot; size=&quot;sm&quot; className=&quot;text-gray-400 hover:text-white&quot;">
                  <Globe className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Udemy</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Teachers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Students
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Developers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Accessibility
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Udemy Clone. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
