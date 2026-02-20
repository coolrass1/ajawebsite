import clsx from 'clsx';
import { ReactNode } from 'react';

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

export function Section({ children, className, id }: SectionProps) {
    return (
        <section id={id} className={clsx('py-24 md:py-40 px-6 md:px-12 max-w-[1360px] mx-auto', className)}>
            {children}
        </section>
    );
}
