"use client";

export default function HomePage() {
  if (typeof window !== 'undefined') {
    window.location.href = '/index.html';
  }
  
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-blue-500 rounded-full flex items-center justify-center animate-spin">
          <span className="text-white">💰</span>
        </div>
        <h2 className="text-xl font-semibold">Cargando TuFinanza...</h2>
      </div>
    </div>
  );
}