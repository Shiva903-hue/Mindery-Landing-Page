import React, { useState } from 'react';
import { CheckCircle, XCircle, User, Calendar, FileText, Hash, ChevronDown, ChevronUp, PaintBucket, ReceiptIndianRupeeIcon, ScaleIcon } from 'lucide-react';

export default function VoucherCard({ voucherData, onApprove, onReject }) {
  const [isDisappearing, setIsDisappearing] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleApprove = async () => {
    if (isProcessing) return;
    setIsProcessing(true);

    const payload = {
      approvedDate: new Date().toISOString(),
      status: true,
    };

    try {
      await fetch(`http://localhost:5000/requests/${voucherData.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      setIsDisappearing(true);
      setTimeout(() => {
        onApprove(voucherData.voucherId);
      }, 300);
    } catch (error) {
      console.error("Error approving voucher:", error);
      setIsProcessing(false);
    }
  };

  const handleReject = async () => {
    if (isProcessing) return;
    setIsProcessing(true);

    const payload = {
      approvedDate: new Date().toISOString(),
      status: false,
    };

    try {
      await fetch(`http://localhost:5000/requests/${voucherData.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      setIsDisappearing(true);
      setTimeout(() => {
        onReject(voucherData.voucherId);
      }, 300);
    } catch (error) {
      console.error("Error rejecting voucher:", error);
      setIsProcessing(false);
    }
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Check if details are long enough to need expansion
  const isDetailsLong = voucherData.details && voucherData.details.length > 150;

  return (
    <div className={`bg-white rounded-xl shadow-lg border border-gray-100 p-6 transition-all duration-300 hover:shadow-xl ${
      isDisappearing ? 'opacity-0 scale-95 translate-y-2' : 'opacity-100 scale-100 translate-y-0'
    }`}>
      {/* Header with Voucher ID */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-blue-50 rounded-lg">
            <Hash className="w-4 h-4 text-blue-600" />
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Voucher ID</p>
            <p className="text-lg font-bold text-gray-900 font-mono">{voucherData.voucherId}</p>
          </div>
        </div>
        <div className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold">
          Pending
        </div>
      </div>

      {/* User ID */}
      <div className="flex items-center space-x-3 mb-4">
        <div className="p-2 bg-green-50 rounded-lg">
          <User className="w-4 h-4 text-green-600" />
        </div>
        <div className="flex-1">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">User ID</p>
          <p className="text-base font-semibold text-gray-900 font-mono">{voucherData.userId}</p>
        </div>
      </div>

      {/* Voucher Date */}
      <div className="flex items-center space-x-3 mb-4">
        <div className="p-2 bg-purple-50 rounded-lg">
          <Calendar className="w-4 h-4 text-purple-600" />
        </div>
        <div className="flex-1">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Date</p>
          <p className="text-base font-medium text-gray-900">
            {new Date(voucherData.voucherDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}
          </p>
        </div>
      </div>

      {/* P-name */}
      <div className="mb-6">
        <div className="flex items-start space-x-3">
          <div className="p-2 bg-orange-50 rounded-lg">
            <FileText className="w-4 h-4 text-orange-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Items</p>
            <div className="relative">
              <p className={`text-sm text-gray-700 leading-relaxed break-words overflow-wrap-anywhere ${
                !isExpanded && isDetailsLong ? 'line-clamp-3' : ''
              }`}>
                {voucherData.P_name}
              </p>
              
              {isDetailsLong && (
                <button
                  onClick={toggleExpanded}
                  className="mt-2 flex items-center text-xs text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  {isExpanded ? (
                    <>
                      <ChevronUp className="w-3 h-3 mr-1" />
                      Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-3 h-3 mr-1" />
                      Show More
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

                 {/* Quantity */}
      <div className="flex items-center space-x-3 mb-4">
        <div className="p-2 bg-green-50 rounded-lg">
          <PaintBucket className="w-4 h-4 text-green-600" />
        </div>
        <div className="flex-1">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Quantity</p>
          <p className="text-base font-semibold text-gray-900 font-mono">{voucherData.P_quantity}</p>
        </div>
      </div>

         {/* Amount */}
      <div className="flex items-center space-x-3 mb-4">
        <div className="p-2 bg-green-50 rounded-lg">
          <ReceiptIndianRupeeIcon className="w-4 h-4 text-green-600" />
        </div>
        <div className="flex-1">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Amount</p>
          <p className="text-base font-semibold text-gray-900 font-mono">{voucherData.P_amount}</p>
        </div>
      </div>

         {/* Rate */}
      <div className="flex items-center space-x-3 mb-4">
        <div className="p-2 bg-green-50 rounded-lg">
          <ScaleIcon className="w-4 h-4 text-green-600" />
        </div>
        <div className="flex-1">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Rate</p>
          <p className="text-base font-semibold text-gray-900 font-mono">{voucherData.P_rate}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-3 pt-4 border-t border-gray-100">
        <button
          onClick={handleApprove}
          disabled={isProcessing}
          className="flex-1 flex justify-center items-center px-4 py-3 text-sm font-semibold rounded-lg text-white bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-md"
        >
          <CheckCircle className="w-4 h-4 mr-2" />
          {isProcessing ? 'Processing...' : 'Approve'}
        </button>

        <button
          onClick={handleReject}
          disabled={isProcessing}
          className="flex-1 flex justify-center items-center px-4 py-3 text-sm font-semibold rounded-lg text-white bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-md"
        >
          <XCircle className="w-4 h-4 mr-2" />
          {isProcessing ? 'Processing...' : 'Reject'}
        </button>
      </div>
    </div>
  );
}