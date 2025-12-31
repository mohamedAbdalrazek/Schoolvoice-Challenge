import { useEffect, useRef } from 'react'

export default function useObserver(array: object[], styles: CSSModuleClasses) {
    const refs = useRef<(HTMLDivElement | null)[]>([])
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add(styles.visible)
                        }, index * 100)

                        observer.unobserve(entry.target)
                    }
                })
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        )
        const current = refs.current

        current.forEach((row) => {
            if (row) observer.observe(row)
        })

        return () => {
            current.forEach((row) => {
                if (row) observer.unobserve(row)
            })
        }
    }, [array, styles.visible])
    return { refs }
}
