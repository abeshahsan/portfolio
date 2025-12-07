import { motion } from "framer-motion";
import SectionHeader from "../common/SectionHeader";

export default function Thesis() {
	return (
		<motion.section
			id='thesis'
			className='rounded-[2.25rem] border border-slate-100/70 bg-linear-to-br from-white via-purple-50/40 to-white p-10 shadow-[0_40px_120px_-80px] shadow-purple-500/20 dark:border-slate-800/70 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900'
			initial={{ opacity: 0, y: 32 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.55, ease: "easeOut" }}
		>
			<div className='space-y-8'>
				<SectionHeader
					label='Thesis'
					title='Research in computer vision'
					copy='Exploring weakly supervised methods for semantic segmentation.'
				/>
				<div className='space-y-6'>
					<div className='rounded-2xl border border-slate-100/80 bg-linear-to-br from-white/90 via-purple-50/30 to-white/90 p-6 shadow-[0_30px_80px_-60px] shadow-purple-500/15 dark:border-slate-800 dark:from-slate-900/80 dark:via-slate-900/40 dark:to-slate-900/80'>
						<div className='mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between'>
							<h3 className='text-xl font-semibold text-slate-900 dark:text-white'>
								Weakly Supervised Semantic Segmentation Using Transformer-Based Feature Extraction
							</h3>
							<span className='text-sm font-medium text-slate-500 dark:text-slate-400 sm:shrink-0'>
								January 2024 – October 2025
							</span>
						</div>
						<div className='space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-300'>
							<p>
								For my undergraduate thesis, I explored improving fine-grained object understanding in
								weakly supervised semantic segmentation, where only image-level labels are used. My work
								focused on generating more detailed Class Activation Maps (CAMs) through enhanced feature
								extraction.
							</p>
							<p>
								Instead of common encoders like CLIP or ViT, I used UniCL with a Swin Transformer for
								stronger local feature representation. I experimented with CAM generation, refinement, and
								affinity-enhancement techniques using intermediate encoder features.
							</p>
							<p>
								The model achieved a mean IoU of 50%, producing detailed segmentation masks with improved
								boundary sharpness and fine-grained regions compared to baseline methods.
							</p>
							<div className='mt-6 rounded-xl border border-purple-100/70 bg-purple-50/50 p-4 dark:border-purple-500/20 dark:bg-purple-500/5'>
								<h4 className='mb-3 text-sm font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-300'>
									Key Learnings
								</h4>
								<ul className='space-y-2 text-sm'>
									<li className='flex items-start gap-3'>
										<span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500 dark:bg-purple-400' />
										<span>Transformer architectures (Swin, UniCL, ViT-family)</span>
									</li>
									<li className='flex items-start gap-3'>
										<span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500 dark:bg-purple-400' />
										<span>CAM generation and refinement pipelines</span>
									</li>
									<li className='flex items-start gap-3'>
										<span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500 dark:bg-purple-400' />
										<span>Weakly supervised segmentation strategies</span>
									</li>
									<li className='flex items-start gap-3'>
										<span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500 dark:bg-purple-400' />
										<span>ML experimentation, evaluation, and reproducible research workflows</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</motion.section>
	);
}
