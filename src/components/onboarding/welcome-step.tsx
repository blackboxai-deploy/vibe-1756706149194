"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface WelcomeStepProps {
  onNext: () => void;
}

export function WelcomeStep({ onNext }: WelcomeStepProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto shadow-xl border-0">
        <CardHeader className="text-center pb-4">
          <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
            <span className="text-3xl">💰</span>
          </div>
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            ¡Bienvenido a TuFinanza!
          </CardTitle>
          <p className="text-gray-600 mt-2">
            Tu asistente personal de finanzas
          </p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-sm">🌍</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Múltiples divisas</h3>
                <p className="text-sm text-gray-600">
                  USD, EUR, ARS, COP, MXN, CLP, PEN, UYU, BRL, GBP
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-sm">🔧</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Perfil editable</h3>
                <p className="text-sm text-gray-600">
                  Cambia país, email, divisa cuando quieras
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-sm">💱</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Balance inteligente</h3>
                <p className="text-sm text-gray-600">
                  Ve tu balance en USD o divisa local
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-sm">📱</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">PWA para iPhone</h3>
                <p className="text-sm text-gray-600">
                  Instálala como app nativa, funciona offline
                </p>
              </div>
            </div>
          </div>
          
          <div className="pt-4">
            <Button 
              onClick={onNext}
              className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
              size="lg"
            >
              Comenzar
            </Button>
          </div>
          
          <div className="text-center">
            <p className="text-xs text-gray-500">
              Tus datos se almacenan de forma segura en tu dispositivo
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default WelcomeStep;