export default function Portfolio() {
	return (
		<div className='min-h-screen bg-gray-50 text-gray-800 font-sans'>
			{/* Header */}
			<header className='w-full p-6 shadow-sm bg-white sticky top-0 z-50'>
				<div className='max-w-5xl mx-auto flex justify-between items-center'>
					<h1 className='text-2xl font-bold'>Abesh Ahsan</h1>
					<nav className='space-x-6 text-lg'>
						<a
							href='#about'
							className='hover:text-blue-600'
						>
							About
						</a>
						<a
							href='#skills'
							className='hover:text-blue-600'
						>
							Skills
						</a>
						<a
							href='#projects'
							className='hover:text-blue-600'
						>
							Projects
						</a>
						<a
							href='#contact'
							className='hover:text-blue-600'
						>
							Contact
						</a>
					</nav>
				</div>
			</header>

			{/* Hero Section */}
			<section
				className='max-w-5xl mx-auto text-center py-24'
				id='hero'
			>
				<h2 className='text-4xl font-extrabold mb-4'>Software & ML Developer</h2>
				<p className='text-lg text-gray-600 max-w-2xl mx-auto'>
					Freshman developer passionate about Machine Learning, Deep Learning, Semantic Segmentation, Flutter,
					Rasa NLU, and building real-time apps.
				</p>
				<button className='mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl text-lg hover:bg-blue-700 shadow-md'>
					Download Resume
				</button>
			</section>

			{/* About */}
			<section
				className='max-w-5xl mx-auto py-16'
				id='about'
			>
				<h3 className='text-3xl font-bold mb-6'>About Me</h3>
				<p className='text-gray-700 leading-7 text-lg'>
					I am a first-year student working on ML and DL projects such as weakly supervised semantic
					segmentation, real-time sign language recognition, and VUI mobile apps. I enjoy building modular ML
					pipelines, model experimentation frameworks, and production-ready app features.
				</p>
			</section>

			{/* Skills */}
			<section
				className='max-w-5xl mx-auto py-16'
				id='skills'
			>
				<h3 className='text-3xl font-bold mb-6'>Skills</h3>
				<div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-lg'>
					<span className='p-3 bg-white rounded-xl shadow'>Python</span>
					<span className='p-3 bg-white rounded-xl shadow'>PyTorch Lightning</span>
					<span className='p-3 bg-white rounded-xl shadow'>TensorFlow</span>
					<span className='p-3 bg-white rounded-xl shadow'>Flutter</span>
					<span className='p-3 bg-white rounded-xl shadow'>Rasa NLU</span>
					<span className='p-3 bg-white rounded-xl shadow'>JavaScript</span>
					<span className='p-3 bg-white rounded-xl shadow'>React.js</span>
					<span className='p-3 bg-white rounded-xl shadow'>Tailwind CSS</span>
				</div>
			</section>

			{/* Projects */}
			<section
				className='max-w-5xl mx-auto py-16'
				id='projects'
			>
				<h3 className='text-3xl font-bold mb-6'>Projects</h3>
				<div className='grid md:grid-cols-2 gap-8'>
					<div className='p-6 bg-white rounded-2xl shadow-lg'>
						<h4 className='text-xl font-semibold mb-2'>Real-time Sign Language Learner</h4>
						<p className='text-gray-700 mb-3'>
							A SlowFastSign-based ML system predicting sign language in real-time using GTX 1650 for
							inference.
						</p>
						<a
							className='text-blue-600 hover:underline'
							href='#'
						>
							View Project
						</a>
					</div>

					<div className='p-6 bg-white rounded-2xl shadow-lg'>
						<h4 className='text-xl font-semibold mb-2'>VUI To-Do App (Flutter + Rasa)</h4>
						<p className='text-gray-700 mb-3'>
							Voice-controlled mobile application with NLU backend and real-time STT.
						</p>
						<a
							className='text-blue-600 hover:underline'
							href='#'
						>
							View Project
						</a>
					</div>

					<div className='p-6 bg-white rounded-2xl shadow-lg'>
						<h4 className='text-xl font-semibold mb-2'>Semantic Segmentation Pipeline</h4>
						<p className='text-gray-700 mb-3'>
							End-to-end modular DL pipeline using SegFormer, Hydra, PyTorch Lightning, and ADE20K.
						</p>
						<a
							className='text-blue-600 hover:underline'
							href='#'
						>
							View Project
						</a>
					</div>

					<div className='p-6 bg-white rounded-2xl shadow-lg'>
						<h4 className='text-xl font-semibold mb-2'>Voice Reminder App</h4>
						<p className='text-gray-700 mb-3'>
							Flutter application with speech recognition backend and custom parser.
						</p>
						<a
							className='text-blue-600 hover:underline'
							href='#'
						>
							View Project
						</a>
					</div>
				</div>
			</section>

			{/* Contact */}
			<section
				className='max-w-5xl mx-auto py-16'
				id='contact'
			>
				<h3 className='text-3xl font-bold mb-6'>Contact</h3>
				<p className='text-lg mb-4'>Feel free to reach out for collaborations or opportunities.</p>
				<div className='space-y-2 text-lg'>
					<p>
						Email: <span className='text-blue-600'>your-email@example.com</span>
					</p>
					<p>
						GitHub: <span className='text-blue-600'>github.com/yourusername</span>
					</p>
					<p>
						LinkedIn: <span className='text-blue-600'>linkedin.com/in/yourprofile</span>
					</p>
				</div>
			</section>

			{/* Footer */}
			<footer className='text-center py-6 text-gray-600 border-t mt-12'>
				© {new Date().getFullYear()} Abesh Ahsan
			</footer>
		</div>
	);
}

