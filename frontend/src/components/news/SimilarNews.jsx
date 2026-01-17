import React from "react";

const SimilarNews = () => {
  return (
    <section className="bg-black py-12">
      <div className="mx-auto max-w-7xl px-2 sm:px-4">
        <div className="mb-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <h2 className="text-xl font-semibold text-white">Tin liên quan</h2>
          <button className="text-sm text-yellow-400">Xem tất cả →</button>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="overflow-hidden rounded-xl bg-[#141414]">
              <div className="h-40 bg-gray-700" />
              <div className="space-y-2 p-4">
                <h3 className="text-sm font-semibold text-white">
                  Tiêu đề tin mẫu {i}
                </h3>
                <p className="text-xs text-gray-400">Công nghệ</p>
                <button className="text-xs text-yellow-400">Xem thêm →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimilarNews;
