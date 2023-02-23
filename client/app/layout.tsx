import "../styles/output.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="mesh2">{children}</body>
    </html>
  );
}
