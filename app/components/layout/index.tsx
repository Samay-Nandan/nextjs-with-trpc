import { FC, ReactNode } from "react";

export const Layout: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-2xl">
      {children}
    </div>
  </div>
);
