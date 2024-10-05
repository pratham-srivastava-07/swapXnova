import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-900 text-white py-8"
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: 20 }} 
      transition={{ duration: 0.5 }} 
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          
          <div className="flex items-center space-x-4">
            <img
              src={"/img.webp"}
              alt="Logo"
              className="w-12 h-12"
            />
            <span className="text-xl font-bold">swapXnova</span>
          </div>

         
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.99 3.657 9.13 8.438 9.88v-6.99h-2.54V12h2.54v-1.665c0-2.51 1.492-3.888 3.777-3.888 1.095 0 2.239.196 2.239.196v2.468h-1.26c-1.244 0-1.631.774-1.631 1.562V12h2.78l-.445 2.89h-2.335v6.99C18.343 21.13 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22.672 4.61c-.836.371-1.733.623-2.675.736.96-.574 1.693-1.481 2.036-2.564-.898.53-1.89.914-2.946 1.12a5.056 5.056 0 0 0-8.614 4.606 14.346 14.346 0 0 1-10.408-5.278 5.045 5.045 0 0 0 1.563 6.754 5.008 5.008 0 0 1-2.293-.634v.064c0 2.411 1.716 4.418 3.987 4.872a5.015 5.015 0 0 1-2.285.086 5.057 5.057 0 0 0 4.72 3.505A10.123 10.123 0 0 1 1.833 19.7 14.29 14.29 0 0 0 8.512 21c9.288 0 14.363-7.697 14.363-14.367 0-.22-.005-.438-.014-.656.989-.715 1.845-1.606 2.527-2.628z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.04c-5.493 0-9.96 4.465-9.96 9.96 0 4.402 2.854 8.136 6.818 9.464-.093-.813-.177-2.06.037-2.95.191-.785 1.234-4.994 1.234-4.994s-.316-.635-.316-1.573c0-1.473.856-2.573 1.92-2.573.903 0 1.34.678 1.34 1.493 0 .91-.577 2.277-.875 3.546-.253 1.075.534 1.951 1.583 1.951 1.9 0 3.27-2.006 3.27-4.9 0-2.563-1.847-4.357-4.48-4.357-3.056 0-4.854 2.287-4.854 4.654 0 .915.351 1.895.79 2.43.09.112.102.209.076.32-.083.34-.271 1.076-.307 1.225-.048.203-.16.248-.369.15-1.377-.632-2.235-2.613-2.235-4.204 0-3.419 2.49-6.552 7.185-6.552 3.77 0 6.703 2.683 6.703 6.255 0 3.74-2.352 6.614-5.61 6.614-1.092 0-2.12-.568-2.473-1.243l-.671 2.56c-.243.923-.902 2.075-1.342 2.781.997.308 2.052.478 3.137.478 5.493 0 9.96-4.465 9.96-9.96S17.493 2.04 12 2.04z" />
              </svg>
            </a>
          </div>

          <div className="text-gray-400 text-sm">
            <p>
              &copy; {new Date().getFullYear()} swapX. All rights reserved.
            </p>
            <p className="mt-2">
              <a href="#" className="hover:text-white">Privacy Policy</a> | 
              <a href="#" className="hover:text-white"> Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
