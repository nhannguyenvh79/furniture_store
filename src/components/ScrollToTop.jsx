export default function ScrollToTop() {
  return (
    <div
      style={{
        position: "fixed",
        right: "0px",
        top: "90vh",
        zIndex: "10",
        color: "gray",
      }}
      onClick={() => window.scrollTo(0, 0)}
    >
      <svg
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        style={{
          height: "2em",
          width: "2em",
          strokeWidth: "0",
        }}
      >
        <path d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm129-281c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-71-71V376c0 13.3-10.7 24-24 24s-24-10.7-24-24V193.9l-71 71c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 119c9.4-9.4 24.6-9.4 33.9 0L385 231z"></path>
      </svg>
    </div>
  );
}
