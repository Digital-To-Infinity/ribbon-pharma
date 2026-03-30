import { createContext, useContext, useState } from 'react';
import EnquiryModal from '../components/products/EnquiryModal';

const EnquiryContext = createContext();

export const EnquiryProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const openEnquiry = (product) => {
        setSelectedProduct(product);
        setIsOpen(true);
    };

    const closeEnquiry = () => {
        setIsOpen(false);
        // Don't nullify product immediately to allow exit animation
        setTimeout(() => setSelectedProduct(null), 300);
    };

    return (
        <EnquiryContext.Provider value={{ openEnquiry, closeEnquiry }}>
            {children}
            <EnquiryModal
                isOpen={isOpen}
                onClose={closeEnquiry}
                product={selectedProduct}
            />
        </EnquiryContext.Provider>
    );
};

export const useEnquiry = () => {
    const context = useContext(EnquiryContext);
    if (!context) {
        throw new Error('useEnquiry must be used within an EnquiryProvider');
    }
    return context;
};
