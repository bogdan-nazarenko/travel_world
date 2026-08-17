export function scrollToId(id: string, smooth: boolean = true): void {
    document.getElementById(id)?.scrollIntoView({
        behavior: smooth ? "smooth" : "instant",
    });
}
