export const metadata = {
  title: "TuFinanza - Finanzas Personales",
  description: "Tu asistente personal de finanzas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3B82F6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="TuFinanza" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}