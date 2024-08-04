"use client";

import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";

const components = {
  Image,
};

interface MdxProps {
  code: string;
}

export function Mdx(props: MdxProps) {
  const { code } = props;
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}
