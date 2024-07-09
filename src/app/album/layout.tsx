export default function LanguageLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="p-10">
  
    
        {children}
      </section>
    )
  }
// export default LanguagesLayout;