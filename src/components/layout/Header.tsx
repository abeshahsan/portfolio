import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
	{ href: "#hero", label: "Home" },
	{ href: "#about", label: "About" },
	{ href: "#skills", label: "Skills" },
	{ href: "#projects", label: "Projects" },
	{ href: "#contact", label: "Contact" },
];

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("hero");

	const handleNavClick = () => {
		setMobileMenuOpen(false);
	};

	// Scroll spy - update active section based on scroll position
	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY + 150;

			const sectionIds = NAV_LINKS.map((link) => link.href.slice(1));

			for (const sectionId of sectionIds) {
				const element = document.getElementById(sectionId);
				if (!element) continue;

				const { top, bottom } = element.getBoundingClientRect();
				const elementTop = top + window.scrollY;
				const elementBottom = bottom + window.scrollY;

				if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
					if (sectionId !== activeSection) {
						setActiveSection(sectionId);
						window.history.replaceState(null, "", `#${sectionId}`);
					}
					break;
				}
			}
		};

		let ticking = false;
		const onScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					handleScroll();
					ticking = false;
				});
				ticking = true;
			}
		};

		window.addEventListener("scroll", onScroll, { passive: true });
		handleScroll();

		return () => window.removeEventListener("scroll", onScroll);
	}, [activeSection]);

	return (
		<header className='sticky top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur-lg dark:border-slate-800/70 dark:bg-slate-950/70'>
			<div className='mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8'>
				<a
					href='#hero'
					className='flex items-center gap-3'
					onClick={handleNavClick}
				>
					<img
						src={`${import.meta.env.BASE_URL}abesh-logo.svg`}
						alt='Abesh signature logo'
						className='h-10 w-10'
						loading='lazy'
						decoding='async'
					/>
					<div className='flex flex-col leading-none'>
						<span className='text-xs uppercase tracking-[0.4em] text-slate-400'>Portfolio</span>
						<span className='text-lg font-semibold text-slate-900 dark:text-slate-100'>Abesh Ahsan</span>
					</div>
				</a>
				<nav
					className='hidden items-center gap-3 text-sm font-medium text-slate-600 md:flex'
					role='navigation'
					aria-label='Main navigation'
				>
					{NAV_LINKS.map((link) => {
						const isActive = activeSection === link.href.slice(1);
						return (
							<a
								key={link.href}
								href={link.href}
								className={`nav-link rounded-lg px-3 py-2 transition ${
									isActive
										? "bg-emerald-50 text-emerald-600 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/30"
										: "hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
								}`}
							>
								{link.label}
							</a>
						);
					})}
				</nav>
				<div className='flex items-center gap-3'>
					<ThemeToggle />
					<button
						type='button'
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						className='md:hidden rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
						aria-label='Toggle mobile menu'
					>
						{mobileMenuOpen ? <HiX className='h-6 w-6' /> : <HiMenu className='h-6 w-6' />}
					</button>
				</div>
			</div>
			{/* Mobile Menu */}
			{mobileMenuOpen && (
				<nav
					className='md:hidden border-t border-slate-200/60 bg-white/95 backdrop-blur-lg dark:border-slate-800/70 dark:bg-slate-950/95'
					aria-label='Mobile navigation'
				>
					<div className='mx-auto max-w-6xl px-4 py-3 sm:px-6'>
						<div className='flex flex-col gap-1'>
							{NAV_LINKS.map((link) => {
								const isActive = activeSection === link.href.slice(1);
								return (
									<a
										key={link.href}
										href={link.href}
										onClick={handleNavClick}
										className={`rounded-lg px-4 py-3 text-base font-medium transition ${
											isActive
												? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400"
												: "text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 dark:text-slate-200 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400"
										}`}
									>
										{link.label}
									</a>
								);
							})}
						</div>
					</div>
				</nav>
			)}
		</header>
	);
}

