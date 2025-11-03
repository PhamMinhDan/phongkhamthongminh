import { Check } from 'lucide-react';
import { entServices, getCategoryLabel, formatPrice } from '../data/services';
import Footer from '../components/Footer';

export default function PricingPage() {
  const packages = entServices.filter(s => s.category === 'goi-kham');

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-blue-50 to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Bảng Giá & Gói Khám
            </h1>
            <p className="text-xl text-gray-600">
              Giá dịch vụ minh bạch, chi phí hợp lý
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Các Gói Khám Tổng Hợp
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-blue-500 transition-all"
            >
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-blue-100">{pkg.description}</p>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <span className="text-4xl font-bold text-blue-600">
                    {formatPrice(pkg.price)}
                  </span>
                  <span className="text-gray-600 ml-2">/ lần</span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Thời gian: {pkg.duration} phút</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Khám toàn diện Tai-Mũi-Họng</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Tư vấn chi tiết từ bác sĩ</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Hóa đơn rõ ràng</span>
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Đặt Lịch Gói Này
                </button>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Bảng Giá Chi Tiết Các Dịch Vụ
        </h2>

        <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-teal-600 text-white">
                  <th className="px-6 py-4 text-left font-semibold">Dịch Vụ</th>
                  <th className="px-6 py-4 text-left font-semibold">Loại</th>
                  <th className="px-6 py-4 text-center font-semibold">Thời Gian</th>
                  <th className="px-6 py-4 text-right font-semibold">Giá</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {entServices.map((service) => (
                  <tr key={service.id} className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">{service.name}</div>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                        {getCategoryLabel(service.category)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-700">
                      {service.duration} phút
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="font-semibold text-blue-600 text-lg">
                        {formatPrice(service.price)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 text-center">
            <div className="text-4xl mb-3">💰</div>
            <h3 className="font-bold text-gray-900 mb-2">Giá Cạnh Tranh</h3>
            <p className="text-sm text-gray-600">Giá dịch vụ cộng tác với các phòng khám hàng đầu</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 text-center">
            <div className="text-4xl mb-3">📋</div>
            <h3 className="font-bold text-gray-900 mb-2">Minh Bạch</h3>
            <p className="text-sm text-gray-600">Không phí ẩn, hóa đơn rõ ràng cho mỗi dịch vụ</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 text-center">
            <div className="text-4xl mb-3">✨</div>
            <h3 className="font-bold text-gray-900 mb-2">Gói Ưu Đãi</h3>
            <p className="text-sm text-gray-600">Giảm giá cho khám định kỳ và gia đình</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
