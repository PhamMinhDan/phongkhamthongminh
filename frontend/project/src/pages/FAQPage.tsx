import { useState } from 'react';
import { ChevronDown, MessageSquare } from 'lucide-react';
import Footer from '../components/Footer';

export default function FAQPage() {
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');

  const faqs = [
    {
      id: 'faq-1',
      category: 'Khám Bệnh',
      question: 'Thời gian khám bao lâu?',
      answer: 'Thời gian khám thường từ 30-45 phút tùy vào tình trạng bệnh nhân. Khám ngoài 30 phút, khám nội soi 20-25 phút. Chúng tôi cố gắng khám chi tiết để chẩn đoán chính xác.'
    },
    {
      id: 'faq-2',
      category: 'Khám Bệnh',
      question: 'Có cần chuẩn bị gì trước khi khám?',
      answer: 'Bạn nên chuẩn bị: Mang theo bảo hiểm y tế (nếu có), thông tin lịch sử bệnh, danh sách thuốc đang dùng. Không cần nhịn ăn trước khám. Hãy đến sớm 10-15 phút để hoàn thành thủ tục.'
    },
    {
      id: 'faq-3',
      category: 'Khám Bệnh',
      question: 'Phòng khám có tiếp nhận bảo hiểm y tế không?',
      answer: 'Có, chúng tôi là cơ sở khám chữa bệnh đạt tiêu chuẩn bảo hiểm y tế. Bạn cần mang theo thẻ bảo hiểm y tế và CMND/CCCD. Chúng tôi có thể hỗ trợ xử lý giấy tờ.'
    },
    {
      id: 'faq-4',
      category: 'Đặt Lịch',
      question: 'Làm thế nào để đặt lịch khám?',
      answer: 'Bạn có thể đặt lịch qua: 1) Website (sử dụng form đặt lịch online), 2) Điện thoại: 0123 456 789, 3) Zalo: 0987 654 321, 4) Trực tiếp tại phòng khám. Đặt lịch trước giúp bạn không phải chờ đợi.'
    },
    {
      id: 'faq-5',
      category: 'Đặt Lịch',
      question: 'Có thể thay đổi lịch khám không?',
      answer: 'Có, bạn có thể thay đổi hoặc hủy lịch khám trước 2 tiếng. Vui lòng liên hệ phòng khám sớm nhất để tránh ảnh hưởng đến các bệnh nhân khác.'
    },
    {
      id: 'faq-6',
      category: 'Giá Cả',
      question: 'Tại sao giá khác nhau tùy từng dịch vụ?',
      answer: 'Giá khác nhau tùy vào loại dịch vụ, thời gian khám, thiết bị sử dụng, và chuyên môn của bác sĩ. Khám ngoài (nghe khám) rẻ hơn khám nội soi do không sử dụng thiết bị đắt tiền.'
    },
    {
      id: 'faq-7',
      category: 'Giá Cả',
      question: 'Có giảm giá cho bệnh nhân khác nhau không?',
      answer: 'Có, chúng tôi có các chương trình ưu đãi: Gói khám gia đình giảm 20%, khám định kỳ giảm 15%, bệnh nhân nạn nhân chiến tranh giảm 30% theo quy định. Vui lòng liên hệ để tìm hiểu chi tiết.'
    },
    {
      id: 'faq-8',
      category: 'Dịch Vụ',
      question: 'Nội soi Tai-Mũi-Họng có đau không?',
      answer: 'Nội soi không gây đau, chỉ có cảm giác kích thích nhẹ. Chúng tôi sử dụng thiết bị hiện đại và kỹ thuật chuyên nghiệp để đảm bảo sự thoải mái của bệnh nhân.'
    },
    {
      id: 'faq-9',
      category: 'Dịch Vụ',
      question: 'Bệnh viêm tai ngoài có cần nội soi?',
      answer: 'Không phải lúc nào cũng cần. Bác sĩ sẽ khám ngoài trước, nếu cần kiểm tra chi tiết mới sử dụng nội soi. Nội soi giúp phát hiện mức độ viêm, mức độ tổn thương để điều trị chính xác.'
    },
    {
      id: 'faq-10',
      category: 'Hỗ Trợ',
      question: 'Làm thế nào để liên hệ với bác sĩ sau khám?',
      answer: 'Bạn có thể tái khám hoặc liên hệ qua: Điện thoại: 0123 456 789, Zalo: 0987 654 321. Bác sĩ sẽ tư vấn tiếp theo điện thoại nếu cần. Tài liệu khám sẽ được cấp ngay sau khám.'
    }
  ];

  const categories = ['Tất Cả', ...new Set(faqs.map(f => f.category))];
  const [selectedCategory, setSelectedCategory] = useState('Tất Cả');

  const filteredFaqs = selectedCategory === 'Tất Cả'
    ? faqs
    : faqs.filter(f => f.category === selectedCategory);

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-blue-50 to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              FAQ & Hỗ Trợ
            </h1>
            <p className="text-xl text-gray-600">
              Câu hỏi thường gặp và hỗ trợ từ phòng khám
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-4 mb-16">
          {filteredFaqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-blue-300 transition-colors"
            >
              <button
                onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                className="w-full p-6 flex items-start justify-between hover:bg-blue-50 transition-colors text-left"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">{faq.category}</p>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-blue-600 flex-shrink-0 ml-4 transition-transform ${
                    expandedId === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedId === faq.id && (
                <div className="px-6 py-4 bg-blue-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-8 text-center">
            <div className="text-4xl mb-3">📞</div>
            <h3 className="font-bold text-gray-900 mb-2">Gọi Điện</h3>
            <p className="text-gray-600 mb-4">Gọi ngay để được tư vấn</p>
            <a href="tel:0123456789" className="text-blue-600 font-semibold hover:underline">
              0123 456 789
            </a>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-8 text-center">
            <div className="text-4xl mb-3">💬</div>
            <h3 className="font-bold text-gray-900 mb-2">Zalo</h3>
            <p className="text-gray-600 mb-4">Nhắn tin ngay trên Zalo</p>
            <a href="tel:0987654321" className="text-blue-600 font-semibold hover:underline">
              0987 654 321
            </a>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-8 text-center">
            <div className="text-4xl mb-3">📧</div>
            <h3 className="font-bold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 mb-4">Gửi email cho chúng tôi</p>
            <a href="mailto:contact@entclinic.vn" className="text-blue-600 font-semibold hover:underline">
              contact@entclinic.vn
            </a>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-teal-600 text-white rounded-xl p-12 text-center">
          <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-80" />
          <h2 className="text-2xl font-bold mb-3">Vẫn Cần Hỗ Trợ?</h2>
          <p className="mb-6 text-blue-100">
            Đội ngũ hỗ trợ khách hàng của chúng tôi sẵn sàng giúp bạn 24/7
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
            Liên Hệ Ngay
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
