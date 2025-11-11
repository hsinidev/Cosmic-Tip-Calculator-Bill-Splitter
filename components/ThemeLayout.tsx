
import React, { useState, ReactNode, useCallback } from 'react';

type ModalType = 'About' | 'Contact' | 'Guide' | 'Privacy Policy' | 'Terms of Service' | 'DMCA' | null;

const Modal: React.FC<{ title: string; content: ReactNode; onClose: () => void }> = ({ title, content, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-gray-900 rounded-lg shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto p-6 border border-purple-500"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">{title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">&times;</button>
        </div>
        <div className="text-gray-300 space-y-4">
          {content}
        </div>
      </div>
    </div>
  );
};

const ThemeLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const openModal = useCallback((modal: ModalType) => {
    setActiveModal(modal);
  }, []);

  const closeModal = useCallback(() => {
    setActiveModal(null);
  }, []);

  const getModalContent = (modal: ModalType): ReactNode => {
    switch (modal) {
      case 'About':
        return <p>This Cosmic Tip Calculator is a modern, easy-to-use tool for calculating tips and splitting bills. Built with React and Tailwind CSS, it provides an exceptional user experience with a visually stunning design. Powered by HSINI MOHAMED.</p>;
      case 'Contact':
        return <p>For inquiries, please contact us at <a href="mailto:hsini.web@gmail.com" className="text-purple-400 hover:underline">hsini.web@gmail.com</a> or visit <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">doodax.com</a>.</p>;
      case 'Guide':
        return (
          <>
            <h3 className="text-xl font-semibold">How to Use the Calculator</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Bill Amount:</strong> Enter the total amount of your bill before the tip.</li>
              <li><strong>Select Tip %:</strong> Choose a preset tip percentage (15%, 18%, 20%) or enter a custom amount.</li>
              <li><strong>Number of People:</strong> Specify how many people are splitting the bill.</li>
              <li><strong>Rounding (Optional):</strong> Choose to round the final total up or down to the nearest whole dollar for convenience.</li>
              <li>View the instantly calculated results in the display panel.</li>
            </ol>
          </>
        );
      case 'Privacy Policy':
        return <p>Your privacy is important to us. This application is a client-side tool, meaning all calculations are performed in your browser. We do not collect, store, or transmit any personal data you enter. Your financial information remains completely private to you.</p>;
      case 'Terms of Service':
        return <p>This tool is provided for informational purposes only. The calculations are based on the inputs you provide. We are not responsible for any inaccuracies or discrepancies in billing. Please use this tool as a guide and always verify the final amounts.</p>;
      case 'DMCA':
        return <p>All content, design, and code are original works. If you believe any content infringes on your copyright, please contact us at hsini.web@gmail.com with the necessary documentation to file a DMCA takedown request.</p>;
      default:
        return null;
    }
  };

  const navLinks: ModalType[] = ['About', 'Guide', 'Contact', 'Privacy Policy', 'Terms of Service', 'DMCA'];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-black bg-opacity-30 backdrop-blur-sm sticky top-0 z-40">
        <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            CosmicTip
          </div>
          <div className="hidden md:flex space-x-6">
            {navLinks.map(link => (
              <button key={link} onClick={() => openModal(link)} className="text-gray-300 hover:text-white transition-colors">{link}</button>
            ))}
          </div>
           <div className="md:hidden">
             <select onChange={(e) => openModal(e.target.value as ModalType)} className="bg-gray-800 border border-gray-700 rounded p-2">
                <option>Menu</option>
                 {navLinks.map(link => (
                    <option key={link} value={link}>{link}</option>
                ))}
             </select>
           </div>
        </nav>
      </header>
      
      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-black bg-opacity-30 mt-auto py-6">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p className="mb-2">
            Powered by <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="font-bold" style={{color: '#FFD700'}}>HSINI MOHAMED</a>
          </p>
          <p className="text-sm">
            <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">doodax.com</a>
            <span className="mx-2">|</span>
            <a href="mailto:hsini.web@gmail.com" className="hover:text-white transition-colors">hsini.web@gmail.com</a>
          </p>
        </div>
      </footer>

      {activeModal && (
        <Modal title={activeModal} content={getModalContent(activeModal)} onClose={closeModal} />
      )}
    </div>
  );
};

export default ThemeLayout;
