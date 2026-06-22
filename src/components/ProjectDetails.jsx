import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const ProjectDetails = ({
  title,
  description, 
  subDescription, 
  image, 
  images,
  tags, 
  href,
  closeModal
}) => {
  const slides = useMemo(() => {
    if (images?.length) return images;

    return [
      {
        src: image,
        title,
        description,
      },
    ];
  }, [description, image, images, title]);

  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];
  const hasMultipleSlides = slides.length > 1;

  const showPreviousSlide = useCallback(() => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? slides.length - 1 : currentIndex - 1
    );
  }, [slides.length]);

  const showNextSlide = useCallback(() => {
    setActiveIndex((currentIndex) =>
      currentIndex === slides.length - 1 ? 0 : currentIndex + 1
    );
  }, [slides.length]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeModal();
      if (event.key === "ArrowLeft" && hasMultipleSlides) showPreviousSlide();
      if (event.key === "ArrowRight" && hasMultipleSlides) showNextSlide();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal, hasMultipleSlides, showNextSlide, showPreviousSlide]);

  const hasLiveWebsite = Boolean(href);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full p-4 overflow-y-auto backdrop-blur-sm bg-primary/70"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onMouseDown={closeModal}
    >
      <motion.div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{opacity:0, scale: 0.5}}
        animate={{opacity: 1, scale: 1}}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={closeModal}
          className="absolute z-20 p-2 rounded-sm top-5 right-5 bg-midnight/90 hover:bg-gray-500"
          aria-label="Close project details"
        >
          <img src="assets/close.svg" className="w-6 h-6" alt="" />
        </button>
      <div className="relative min-h-[22rem] overflow-hidden rounded-t-2xl bg-midnight">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeSlide.src}
            src={activeSlide.src}
            alt=""
            className="absolute inset-0 object-cover w-full h-full opacity-40"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 0.4, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/55 to-transparent" />

        {hasMultipleSlides && (
          <div className="absolute z-10 flex gap-2 left-5 top-5">
            <button
              type="button"
              onClick={showPreviousSlide}
              className="flex items-center justify-center text-2xl rounded-full size-10 bg-midnight/80 hover:bg-white/15"
              aria-label="Previous project image"
            >
              &lt;
            </button>
            <button
              type="button"
              onClick={showNextSlide}
              className="flex items-center justify-center text-2xl rounded-full size-10 bg-midnight/80 hover:bg-white/15"
              aria-label="Next project image"
            >
              &gt;
            </button>
          </div>
        )}

        <div className="relative flex flex-col justify-end min-h-[22rem] gap-4 p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeSlide.title}-${activeIndex}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="max-w-xl"
            >
              <p className="text-sm font-medium tracking-wide uppercase text-sand">
                {activeIndex + 1 < 10 ? `0${activeIndex + 1}` : activeIndex + 1} / {slides.length < 10 ? `0${slides.length}` : slides.length}
              </p>
              <h5 className="mt-3 text-3xl font-bold text-white">{activeSlide.title}</h5>
              <p className="mt-3 text-sm leading-6 text-neutral-300">{activeSlide.description}</p>
              {hasLiveWebsite && (
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 mt-5 text-sm font-medium rounded-full bg-white text-primary hover-animation"
                >
                  Open Live Website
                  <img src="assets/arrow-up.svg" alt="" className="size-4" />
                </a>
              )}
            </motion.div>
          </AnimatePresence>

          {hasMultipleSlides && (
            <div className="flex gap-2" aria-label="Project image carousel">
              {slides.map((slide, index) => (
                <button
                  key={`${slide.src}-${index}`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    index === activeIndex ? "w-10 bg-sand" : "w-4 bg-white/30 hover:bg-white/60"
                  }`}
                  aria-label={`Show ${slide.title}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className='p-5'>
        <h5 id="project-modal-title" className='mb-2 text-2xl font-bold text-white' >{title}</h5>
        <p className='mb-3 font-normal text-neutral-400'>{description}</p>
        {subDescription.map((subDesc) => ( 
          <p key={subDesc} className='mb-3 font-normal text-neutral-400'>{subDesc}</p>
        ))}
        <div className='flex flex-col gap-5 mt-4 sm:flex-row sm:items-center sm:justify-between'>
          <div className='flex gap-3'>
            {tags.map((tag) => (<img key={tag.id} src={tag.path} alt={tag.name} className='rounded-lg size-10 hover-animation' />))}
          </div>
          {hasLiveWebsite ? (
            <a href={href} target="_blank" rel="noreferrer" className='inline-flex items-center justify-center gap-2 px-4 py-2 font-medium rounded-full cursor-pointer bg-sand text-primary hover-animation'>
              Live Website <img src='assets/arrow-up.svg' alt="" className='size-4' />
            </a>
          ) : (
            <span className='inline-flex items-center justify-center px-4 py-2 font-medium rounded-full text-neutral-500 bg-white/5'>
              Live link private
            </span>
          )}
        </div>
      </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails
