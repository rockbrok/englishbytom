"use client";

import FAQ from "./index";
import { useLocale } from "next-intl";
import { useState, useEffect } from "react";
import { FAQItem } from "./index";

export default function LocalizedFAQ() {
  const locale = useLocale();
  const [items, setItems] = useState<FAQItem[] | null>(null);

  useEffect(() => {
    import(`./content/${locale}.mdx`)
      .then((mod) => setItems(mod.items))
      .catch(() => setItems([]));
  }, [locale]);

  if (items === null) return <p>Loading FAQs...</p>;
  if (items.length === 0) return <p>No FAQ items found.</p>;

  return <FAQ items={items} />;
}
