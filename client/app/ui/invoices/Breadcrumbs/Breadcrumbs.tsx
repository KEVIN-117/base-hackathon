import { clsx } from 'clsx';
import Link from 'next/link';
import { inter } from '@/app/ui/fonts';
import style from './breadcrumbs.module.css';
import classnames from 'classnames';
interface Breadcrumb {
  label: string;
  href: string;
  active?: boolean;
}

export function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[];
}) {
  return (
    <nav aria-label="Breadcrumb" className={style.nav}>
      <ol className={clsx(inter.className, style.ol)}>
        {breadcrumbs.map((breadcrumb, index) => {
          const isActive = classnames({
            [style.active]: breadcrumb.active,
            [style.inactive]: !breadcrumb.active,
          })
          return (
            <li
              key={breadcrumb.href}
              aria-current={breadcrumb.active}
              className={clsx(style.item, isActive)}
            >
              <Link href={breadcrumb.href} className={style.bre_link}>{breadcrumb.label}</Link>
              {index < breadcrumbs.length - 1 ? (
                <span className={style.value}>/</span>
              ) : null}
            </li>
          )
        })}
      </ol>
    </nav>
  );
}
