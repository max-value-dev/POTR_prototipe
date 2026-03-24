import React from 'react';
import { Instagram, Youtube, Facebook, Bike, Package, Pizza } from 'lucide-react';
import { motion } from 'motion/react';
import { Toaster, toast } from 'sonner';

export default function App() {
  const handleAction = (action: string) => {
    toast.success(`${action} action triggered!`);
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <div className="min-h-screen bg-[#F4F1E8] font-sans text-[#3A2A22] relative overflow-hidden selection:bg-[#90C2C8] selection:text-white">
      <Toaster position="top-center" />
      {/* Texture overlay */}
      <div className="fixed inset-0 opacity-[0.2] pointer-events-none z-50 mix-blend-multiply" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <div className="max-w-[1100px] mx-auto px-8 py-10 relative z-10">
        
        {/* Header Area */}
        <header className="flex justify-end items-start mb-14 relative">
          
          {/* Logo */}
          <motion.div 
            className="absolute left-0 top-0 w-[320px] h-[320px] -ml-10 -mt-10 z-20"
            initial={{ rotate: -45, opacity: 0, scale: 0.8 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 1.5, bounce: 0.5 }}
          >
             <motion.div 
               className="relative w-full h-full flex items-center justify-center"
               animate={{ y: [0, -10, 0] }}
               transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
             >
                <img 
                  src="/logo.png" 
                  alt="Pizza on the Road Logo" 
                  className="w-[280px] h-[280px] object-contain drop-shadow-lg"
                  referrerPolicy="no-referrer"
                />
             </motion.div>
          </motion.div>

          <div className="flex flex-col items-end gap-6 w-full pl-[300px]">
            {/* Top Right Icons */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex gap-6 text-[13px] font-bold"
            >
              <motion.div onClick={() => handleAction('Delivery Scooter')} whileHover={{ scale: 1.1, x: 5, rotate: -5 }} className="flex items-center gap-2 cursor-pointer">
                <div className="w-6 h-6 border border-[#3A2A22] flex items-center justify-center bg-transparent rounded-full">
                  <Bike size={14} />
                </div>
                <span>Delivery Scooter</span>
              </motion.div>
              <motion.div onClick={() => handleAction('Takeaway Box')} whileHover={{ scale: 1.1, y: -3, rotate: [0, -10, 10, -10, 0] }} className="flex items-center gap-2 cursor-pointer">
                <div className="w-6 h-6 border border-[#3A2A22] flex items-center justify-center bg-transparent rounded-sm">
                  <Package size={14} />
                </div>
                <span>Takeaway Box</span>
              </motion.div>
            </motion.div>

            {/* Navigation Pill */}
            <motion.nav 
              initial={{ y: -40, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 150, damping: 15 }}
              className="bg-[#A3B899] rounded-full px-10 py-3.5 flex gap-8 text-[#FDFBF5] font-display text-[17px] tracking-wide uppercase w-full justify-between items-center"
            >
              {['MENU', 'ORDER NOW', 'DELIVERY ZONE', 'ABOUT US', 'CONTACT'].map((item, index) => (
                <motion.a 
                  key={item}
                  href="#" 
                  onClick={(e) => { e.preventDefault(); handleAction(`Navigate to ${item}`); }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (index * 0.1), type: "spring", stiffness: 200, damping: 10 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="hover:opacity-80 transition-opacity inline-block"
                >
                  {item}
                </motion.a>
              ))}
            </motion.nav>
          </div>
        </header>

        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, type: "spring", duration: 1 }}
          className="bg-[#FDFBF5] border border-[#3A2A22] rounded-[24px] p-16 pt-32 pb-28 relative z-10 mt-4"
        >
          <div className="max-w-xl pl-4">
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, type: "spring" }}
              className="font-display text-[64px] leading-[1.05] text-[#3A2A22] mb-8 tracking-tight"
            >
              FRESH PIZZA,<br />
              DELIVERED WITH<br />
              A SMILE.
            </motion.h1>
            <motion.button 
              onClick={() => handleAction('Order Delivery')}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, type: "spring" }}
              whileHover={{ scale: 1.05, rotate: -2, backgroundColor: "#7eb2b9" }}
              whileTap={{ scale: 0.9, scaleX: 1.05, scaleY: 0.95, rotate: 0 }}
              className="bg-[#90C2C8] text-white font-bold tracking-widest px-8 py-3.5 rounded-full text-[15px] transition-colors"
            >
              ORDER DELIVERY
            </motion.button>
          </div>
        </motion.section>

        {/* Best Sellers Section */}
        <section className="mt-16 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex justify-center items-center mb-10"
          >
            <h2 className="font-display text-[48px] text-[#3A2A22] tracking-tight">Best Sellers</h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="absolute right-4 top-2 flex gap-6 text-[11px] font-bold text-[#3A2A22]"
          >
              <motion.div onClick={() => handleAction('Delivery Scooter')} whileHover={{ scale: 1.1, x: 5, rotate: -5 }} className="flex flex-col items-center gap-1.5 cursor-pointer">
                <div className="w-8 h-8 border border-[#3A2A22] flex items-center justify-center rounded-full">
                  <Bike size={16} />
                </div>
                <span>Delivery Scooter</span>
              </motion.div>
              <motion.div onClick={() => handleAction('Takeaway Box')} whileHover={{ scale: 1.1, y: -3, rotate: [0, -10, 10, -10, 0] }} className="flex flex-col items-center gap-1.5 cursor-pointer">
                <div className="w-8 h-8 border border-[#3A2A22] flex items-center justify-center rounded-sm">
                  <Package size={16} />
                </div>
                <span>Takeaway Box</span>
              </motion.div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-3 gap-6"
          >
            {/* Card 1 */}
            <motion.div onClick={() => handleAction('Order Margherita')} variants={fadeUp} whileHover={{ y: -10, rotate: -1 }} className="bg-[#FDFBF5] rounded-[20px] p-6 flex gap-4 items-start cursor-pointer border border-transparent hover:border-[#3A2A22]/20 transition-colors">
              <div className="flex flex-col items-center gap-2 shrink-0">
                <motion.div whileHover={{ y: -15, rotate: 360, scale: 1.1 }} transition={{ type: "spring", stiffness: 300, damping: 15 }} className="w-[60px] h-[60px] rounded-full border border-[#3A2A22] overflow-hidden flex items-center justify-center bg-[#F4F1E8]">
                  <motion.div animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
                    <Pizza size={32} className="text-[#3A2A22]" />
                  </motion.div>
                </motion.div>
                <span className="text-[11px] font-bold text-center leading-tight">Delivery<br/>Hero</span>
              </div>
              <div>
                <h3 className="font-bold text-[17px] mb-1.5 leading-tight">Margherita<br/>Delivery-Ready</h3>
                <p className="text-[13px] leading-snug font-medium text-[#3A2A22]/80">Single the margherita pizza of conservator readls and saliceus.</p>
              </div>
            </motion.div>
            {/* Card 2 */}
            <motion.div onClick={() => handleAction('Order Diablo')} variants={fadeUp} whileHover={{ y: -10, rotate: 1 }} className="bg-[#FDFBF5] rounded-[20px] p-6 flex gap-4 items-start cursor-pointer border border-transparent hover:border-[#3A2A22]/20 transition-colors">
              <div className="flex flex-col items-center gap-2 shrink-0">
                <motion.div whileHover={{ y: -15, rotate: 360, scale: 1.1 }} transition={{ type: "spring", stiffness: 300, damping: 15 }} className="w-[60px] h-[60px] rounded-full border border-[#3A2A22] overflow-hidden flex items-center justify-center bg-[#F4F1E8]">
                  <motion.div animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.5 }}>
                    <Pizza size={32} className="text-[#3A2A22]" />
                  </motion.div>
                </motion.div>
                <span className="text-[11px] font-bold text-center leading-tight">Delivery<br/>Hero</span>
              </div>
              <div>
                <h3 className="font-bold text-[17px] mb-1.5 leading-tight">Diablo-on-Demand</h3>
                <p className="text-[13px] leading-snug font-medium text-[#3A2A22]/80">Fresh prexs nonature diablei, gourmet, gourmeni pepper.onid, wheatan, based on fntiorious pizzata.</p>
              </div>
            </motion.div>
            {/* Card 3 */}
            <motion.div onClick={() => handleAction('Order Ponougaster')} variants={fadeUp} whileHover={{ y: -10, rotate: -1 }} className="bg-[#FDFBF5] rounded-[20px] p-6 flex gap-4 items-start cursor-pointer border border-transparent hover:border-[#3A2A22]/20 transition-colors">
              <div className="flex flex-col items-center gap-2 shrink-0">
                <motion.div whileHover={{ y: -15, rotate: 360, scale: 1.1 }} transition={{ type: "spring", stiffness: 300, damping: 15 }} className="w-[60px] h-[60px] rounded-full border border-[#3A2A22] overflow-hidden flex items-center justify-center bg-[#F4F1E8]">
                  <motion.div animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 1 }}>
                    <Pizza size={32} className="text-[#3A2A22]" />
                  </motion.div>
                </motion.div>
                <span className="text-[11px] font-bold text-center leading-tight">Delivery<br/>Hero</span>
              </div>
              <div>
                <h3 className="font-bold text-[17px] mb-1.5 leading-tight">Ponougaster</h3>
                <p className="text-[13px] leading-snug font-medium text-[#3A2A22]/80">Fresh blined designment and manter atds. creames, noaw catallic mach manss of union.</p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Our Dough Section */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", duration: 1 }}
          className="bg-[#FDFBF5] border border-[#3A2A22] rounded-[24px] p-16 pt-32 pb-28 relative z-10 mt-16 flex justify-end text-right"
        >
          <div className="max-w-xl pr-4">
            <motion.h2 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
              className="font-display text-[64px] leading-[1.05] text-[#3A2A22] mb-8 tracking-tight"
            >
              72-HOUR DOUGH,<br />
              WOOD-FIRED<br />
              PERFECTION.
            </motion.h2>
            <motion.button 
              onClick={() => handleAction('Read Our Story')}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring" }}
              whileHover={{ scale: 1.05, rotate: 2, backgroundColor: "#D96C4A" }}
              whileTap={{ scale: 0.9, scaleX: 1.05, scaleY: 0.95, rotate: 0 }}
              className="bg-[#90C2C8] text-white font-bold tracking-widest px-8 py-3.5 rounded-full text-[15px] transition-colors"
            >
              READ OUR STORY
            </motion.button>
          </div>
        </motion.section>

        {/* Catering Section */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", duration: 1 }}
          className="bg-[#FDFBF5] border border-[#3A2A22] rounded-[24px] p-16 pt-32 pb-28 relative z-10 mt-16"
        >
          <div className="max-w-xl pl-4">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
              className="font-display text-[64px] leading-[1.05] text-[#3A2A22] mb-8 tracking-tight"
            >
              BRING THE PARTY,<br />
              WE BRING<br />
              THE PIZZA.
            </motion.h2>
            <motion.button 
              onClick={() => handleAction('Book Catering')}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring" }}
              whileHover={{ scale: 1.05, rotate: -2, backgroundColor: "#7eb2b9" }}
              whileTap={{ scale: 0.9, scaleX: 1.05, scaleY: 0.95, rotate: 0 }}
              className="bg-[#90C2C8] text-white font-bold tracking-widest px-8 py-3.5 rounded-full text-[15px] transition-colors"
            >
              BOOK CATERING
            </motion.button>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 1 }}
          className="mt-16 bg-[#A3B899] rounded-t-[24px] p-10 flex justify-between items-center relative text-[#3A2A22]"
        >
          <div className="flex flex-col gap-3 font-bold text-[13px]">
            <motion.div onClick={() => handleAction('Instagram')} whileHover={{ x: 5 }} className="flex items-center gap-2 cursor-pointer"><Instagram size={18} /> @pizzaonia</motion.div>
            <motion.div onClick={() => handleAction('Youtube')} whileHover={{ x: 5 }} className="flex items-center gap-2 cursor-pointer"><Youtube size={18} /> @pizzaonmedis</motion.div>
            <motion.div onClick={() => handleAction('Facebook')} whileHover={{ x: 5 }} className="flex items-center gap-2 cursor-pointer"><Facebook size={18} /> @pizzaonio</motion.div>
          </div>
          
          <div className="text-[13px] font-bold flex flex-col gap-1">
            <h4 className="mb-1 text-[15px]">Store Hours</h4>
            <p>Mon. 13:00 - 16:00</p>
            <p>Tue 12:00 - 20:00</p>
            <p>Dianto closed</p>
          </div>

          {/* Center Logo */}
          <motion.div 
            onClick={() => handleAction('Home')}
            whileHover={{ scale: 1.1, rotate: 10 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          >
             <div className="w-[100px] h-[100px] flex items-center justify-center relative">
                <img 
                  src="/logo.png" 
                  alt="Pizza on the Road Footer Logo" 
                  className="w-full h-full object-contain drop-shadow-md"
                  referrerPolicy="no-referrer"
                />
             </div>
          </motion.div>

          <div className="flex gap-6 text-[11px] font-bold">
              <motion.div onClick={() => handleAction('Delivery Scooter')} whileHover={{ scale: 1.1, x: 5, rotate: -5 }} className="flex flex-col items-center gap-1.5 cursor-pointer">
                <div className="w-8 h-8 border border-[#3A2A22] flex items-center justify-center rounded-full">
                  <Bike size={16} />
                </div>
                <span className="text-center">Delivery<br/>Scooter</span>
              </motion.div>
              <motion.div onClick={() => handleAction('Takeaway Box')} whileHover={{ scale: 1.1, y: -3, rotate: [0, -10, 10, -10, 0] }} className="flex flex-col items-center gap-1.5 cursor-pointer">
                <div className="w-8 h-8 border border-[#3A2A22] flex items-center justify-center rounded-sm">
                  <Package size={16} />
                </div>
                <span className="text-center">Takeaway<br/>Box</span>
              </motion.div>
          </div>
        </motion.footer>

      </div>
    </div>
  );
}
