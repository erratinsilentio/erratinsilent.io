import "../styles/output.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="mesh">{children}</body>
    </html>
  );
}
