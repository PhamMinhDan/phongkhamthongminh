import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-blue-50 to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Liên Hệ Với Chúng Tôi
            </h1>
            <p className="text-xl text-gray-600">
              Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1 text-lg">Địa Chỉ</h3>
                <p className="text-gray-600 leading-relaxed">
                  123 Đường Nguyễn Văn Linh<br />
                  Phường 26, Quận 7<br />
                  Thành phố Hồ Chí Minh, Việt Nam
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1 text-lg">Điện Thoại</h3>
                <p className="text-gray-600">
                  Hotline: <a href="tel:0123456789" className="text-blue-600 hover:underline font-medium">0123 456 789</a><br />
                  Zalo: <a href="tel:0987654321" className="text-blue-600 hover:underline font-medium">0987 654 321</a><br />
                  Fax: 028 1234 5678
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1 text-lg">Email</h3>
                <p className="text-gray-600">
                  <a href="mailto:contact@entclinic.vn" className="text-blue-600 hover:underline">contact@entclinic.vn</a><br />
                  <a href="mailto:support@entclinic.vn" className="text-blue-600 hover:underline">support@entclinic.vn</a>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1 text-lg">Giờ Làm Việc</h3>
                <p className="text-gray-600">
                  Thứ 2 - Thứ 6: 8:00 - 20:00<br />
                  Thứ 7: 8:00 - 18:00<br />
                  Chủ Nhật: 8:00 - 17:00<br />
                  <span className="text-xs text-gray-500">Có bác sĩ trực khám khẩn cấp</span>
                </p>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 rounded-lg p-6">
              <h3 className="font-bold text-red-900 mb-2">Tình Trạng Khẩn Cấp</h3>
              <p className="text-red-800 mb-3">
                Nếu bạn gặp tình trạng khẩn cấp (chảy máu cam liên tục, khó thở...), vui lòng gọi ngay:
              </p>
              <a
                href="tel:0123456789"
                className="inline-flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
              >
                <Phone className="w-5 h-5" />
                <span>0123 456 789</span>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden h-[600px] shadow-lg border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.954387384135!2d106.69919631480082!3d10.732119192330907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fbea5fe3db1%3A0xfae94aca5709003f!2sNguyen%20Van%20Linh%2C%20District%207%2C%20Ho%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1629789123456!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Map location"
            ></iframe>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Gửi Tin Nhắn Cho Chúng Tôi
          </h2>

          <form className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Họ và Tên
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Nguyễn Văn A"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="email@example.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Số Điện Thoại
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="0123 456 789"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Chủ Đề
              </label>
              <select
                id="subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              >
                <option>Chọn chủ đề</option>
                <option>Tư vấn dịch vụ</option>
                <option>Đặt lịch khám</option>
                <option>Phản hồi về dịch vụ</option>
                <option>Tình trạng khẩn cấp</option>
                <option>Khác</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Nội Dung Tin Nhắn
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Vui lòng chi tiết câu hỏi hoặc yêu cầu của bạn..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Gửi Tin Nhắn
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
