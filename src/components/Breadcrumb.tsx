import { Dot } from 'lucide-react'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import React from 'react'
import { cn } from '@/lib/utils'

export type BreadcrumbsProps = {
  href?: string
  label: string
  isActive?: boolean
}

interface Props {
  breadcrumbItems: BreadcrumbsProps[]
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
                    className={cn({
                      'transition-colors': true,
                      'text-foreground': item.isActive,
                      'text-foreground-secondary': !item.isActive,
                    })}
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
  )
}
