import { Phone } from "lucide-react";

export function StickyCallButton() {
  return (
    <a
      href="tel:8077583921"
      className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
      aria-label="Call us at 8077583921"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
}
