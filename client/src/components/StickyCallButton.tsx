import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export function StickyCallButton() {
  return (
    <motion.a
      href="tel:8077583921"
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-primary to-accent text-white p-4 rounded-full shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:shadow-[0_0_40px_rgba(168,85,247,0.7)] transition-all duration-300 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
      <span className="sr-only">Call us at 8077583921</span>
    </motion.a>
  );
}
