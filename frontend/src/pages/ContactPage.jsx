import React from "react";

const ContactPage = () => {
  return (
    <div className="flex min-h-[80vh] w-full flex-col items-center justify-center bg-white px-4 py-12 sm:px-6 lg:px-8 dark:bg-neutral-900">
      <div className="w-full max-w-lg space-y-8 rounded-lg bg-gray-50 p-8 shadow-lg dark:bg-neutral-800">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-900 dark:text-white">
          Liên hệ với chúng tôi
        </h2>
        <p className="mb-6 text-center text-gray-700 dark:text-gray-300">
          Nếu bạn có bất kỳ câu hỏi, góp ý hoặc cần hỗ trợ, vui lòng điền vào
          biểu mẫu dưới đây hoặc gửi email cho chúng tôi.
        </p>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Họ và tên *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="mt-1 block min-h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-neutral-600 dark:text-white"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-1 block min-h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-neutral-600 dark:text-white"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Nội dung *
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="mt-1 block min-h-30 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-neutral-600 dark:text-white"
            />
          </div>
          <button
            type="submit"
            className="mt-3 w-full rounded-md bg-yellow-500 px-4 py-3 font-semibold text-black shadow hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
          >
            Gửi liên hệ
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
