import { Dot } from 'lucide-react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import React from 'react';

export type BreadcrumbsProps = {
  href?: string;
  label: string;
};

interface Props {
  breadcrumbItems: BreadcrumbsProps[];
}

export function Breadcrumbs({ breadcrumbItems }: Props) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbItems.map((item: BreadcrumbsProps, index: number) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              {item.href ? (
                <>
                  <BreadcrumbLink
                    href={item.href}
                    className="text-foreground-secondary"
                  >
                    {item.label}
                  </BreadcrumbLink>
                </>
              ) : (
                <BreadcrumbPage className="max-w-20 truncate md:max-w-none">
                  {item.label}
                </BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {index !== breadcrumbItems.length - 1 && (
              <BreadcrumbSeparator>
                <Dot />
              </BreadcrumbSeparator>
            )}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
