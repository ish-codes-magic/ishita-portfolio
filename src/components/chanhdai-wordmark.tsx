export function ChanhDaiWordmark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 2048 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M800 32H1248v32H1088v160h160v32H800v-32h160V64H800V32Z"
      />
    </svg>
  );
}

export function getWordmarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 2048 256"><path fill="${color}" d="M800 32H1248v32H1088v160h160v32H800v-32h160V64H800V32Z"/></svg>`;
}
