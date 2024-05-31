import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
type HashSetter = (hash: string) => void;
export function useHash(defaultHash: string): [string, HashSetter] {
  const router = useRouter();
  const pathName = usePathname();
  console.log(pathName);
  const [hash, setHash] = useState(defaultHash);
  function _setHash(hash: string) {
    router.push(pathName + "#" + hash);
    setHash(hash);
  }
  return [hash, _setHash];
}
