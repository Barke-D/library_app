export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex h-dvh items-center justify-center">{children}</main>
  );
}
