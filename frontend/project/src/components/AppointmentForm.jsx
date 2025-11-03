import { useState } from 'react';
import { Calendar, User, Phone, Stethoscope, Send } from 'lucide-react';
import { doctors } from '../data/doctors';

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    specialty: 'tai-mui-hong',
    doctor: '',
    date: '',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    await new Promise(resolve => setTimeout(resolve, 1500));

    setSubmitStatus('success');
    setIsSubmitting(false);

    setFormData({
      fullName: '',
      phone: '',
      specialty: 'tai-mui-hong',
      doctor: '',
      date: '',
      notes: ''
    });

    setTimeout(() => {
      setSubmitStatus('idle');
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="appointment" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
            Đặt Lịch Nhanh
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Đặt Lịch Khám Ngay Hôm Nay
          </h2>
          <p className="text-lg text-gray-600">
            Điền thông tin bên dưới, chúng tôi sẽ liên hệ xác nhận trong vòng 30 phút
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
          {submitStatus === 'success' && (
            <div className="mb-8 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-lg">✓</span>
              </div>
              <div>
                <p className="font-semibold text-green-900">Đặt lịch thành công!</p>
                <p className="text-sm text-green-700">Chúng tôi sẽ liên hệ với bạn sớm nhất.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Họ và Tên <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nguyễn Văn A"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Số Điện Thoại <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="0123 456 789"
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-2">
                Chuyên Khoa <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Stethoscope className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  id="specialty"
                  name="specialty"
                  required
                  value={formData.specialty}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  <option value="tai-mui-hong">Tai - Mũi - Họng</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="doctor" className="block text-sm font-medium text-gray-700 mb-2">
                  Chọn Bác Sĩ
                </label>
                <select
                  id="doctor"
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
                  className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  <option value="">Bác sĩ phù hợp</option>
                  {doctors.map((doctor) => (
                    <option key={doctor.id} value={doctor.id}>
                      {doctor.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                  Ngày Khám Mong Muốn
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                Ghi Chú (Tùy Chọn)
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                value={formData.notes}
                onChange={handleChange}
                className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Mô tả triệu chứng hoặc lý do khám..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Đang Gửi...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Đặt Lịch Ngay</span>
                </>
              )}
            </button>

            <p className="text-sm text-gray-500 text-center">
              Bằng cách đặt lịch, bạn đồng ý với{' '}
              <a href="#" className="text-blue-600 hover:underline">
                Điều khoản sử dụng
              </a>
            </p>
          </form>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <div className="text-3xl mb-2">⏰</div>
            <h3 className="font-bold text-gray-900 mb-1">Phản Hồi Nhanh</h3>
            <p className="text-sm text-gray-600">Xác nhận trong 30 phút</p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <div className="text-3xl mb-2">📅</div>
            <h3 className="font-bold text-gray-900 mb-1">Linh Hoạt</h3>
            <p className="text-sm text-gray-600">Chọn thời gian phù hợp</p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <div className="text-3xl mb-2">✅</div>
            <h3 className="font-bold text-gray-900 mb-1">Miễn Phí</h3>
            <p className="text-sm text-gray-600">Không mất phí đặt lịch</p>
          </div>
        </div>
      </div>
    </section>
  );
}