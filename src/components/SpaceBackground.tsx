import { useEffect } from 'react';

export default function SpaceBackground() {
    useEffect(() => {
        const canvas = document.getElementById('global-space') as HTMLCanvasElement | null;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: false });
        if (!ctx) return;

        let width = 0, height = 0;
        let animationFrameId: number;
        let isInactive = false;

        let starCount = 0;
        let starX: Float32Array, starY: Float32Array, starZ: Float32Array;
        let starBaseAlpha: Float32Array, starBlinkOffset: Float32Array, starTints: Float32Array;
        let starSize: Float32Array;
        
        let meteorActive = false;
        let meteorX = 0, meteorY = 0, meteorLen = 0, meteorSpeed = 0, meteorAngle = 0, meteorLife = 0;

        const nebulaCanvas1 = document.createElement('canvas');
        const nebulaCtx1 = nebulaCanvas1.getContext('2d', { alpha: true });
        const nebulaCanvas2 = document.createElement('canvas');
        const nebulaCtx2 = nebulaCanvas2.getContext('2d', { alpha: true });

        const isMobile = window.innerWidth < 768;

        const init = () => {
            if (isMobile) {
                // Keep stars on mobile, but maybe fewer?
                // The prompt for mobile hero originally fell back to css
                canvas.style.display = 'none';
                return;
            }

            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;

            starCount = Math.floor((width * height) / 4500);
            
            starX = new Float32Array(starCount);
            starY = new Float32Array(starCount);
            starZ = new Float32Array(starCount);
            starBaseAlpha = new Float32Array(starCount);
            starBlinkOffset = new Float32Array(starCount);
            starTints = new Float32Array(starCount);
            starSize = new Float32Array(starCount);

            for (let i = 0; i < starCount; i++) {
                starX[i] = Math.random() * width;
                starY[i] = Math.random() * height;
                starZ[i] = Math.random() * 1.5 + 0.1;
                starBaseAlpha[i] = Math.random() * 0.5 + 0.1;
                starBlinkOffset[i] = Math.random() * Math.PI * 2;
                starTints[i] = Math.random() > 0.85 ? 1 : 0; 
                starSize[i] = Math.random() > 0.95 ? 2.5 : 1.2;
            }

            nebulaCanvas1.width = nebulaCanvas1.height = 800;
            if (nebulaCtx1) {
                const grad1 = nebulaCtx1.createRadialGradient(400, 400, 0, 400, 400, 400);
                grad1.addColorStop(0, 'rgba(237, 123, 15, 0.04)');
                grad1.addColorStop(1, 'transparent');
                nebulaCtx1.fillStyle = grad1;
                nebulaCtx1.fillRect(0, 0, 800, 800);
            }

            nebulaCanvas2.width = nebulaCanvas2.height = 800;
            if (nebulaCtx2) {
                const grad2 = nebulaCtx2.createRadialGradient(400, 400, 0, 400, 400, 400);
                grad2.addColorStop(0, 'rgba(34, 197, 62, 0.03)');
                grad2.addColorStop(1, 'transparent');
                nebulaCtx2.fillStyle = grad2;
                nebulaCtx2.fillRect(0, 0, 800, 800);
            }

            animationFrameId = requestAnimationFrame(renderLoop);
        };

        const renderLoop = (time: number) => {
            if (isInactive) return;

            // Clear with deep void color (no blue hue)
            ctx.fillStyle = '#020202';
            ctx.fillRect(0, 0, width, height);

            if (nebulaCanvas1.width > 0 && nebulaCanvas2.width > 0) {
                ctx.drawImage(nebulaCanvas1, width * 0.1 - 400, height * 0.2 - 400);
                ctx.drawImage(nebulaCanvas2, width * 0.8 - 400, height * 0.8 - 400);
            }

            for (let i = 0; i < starCount; i++) {
                starY[i] -= starZ[i] * 0.2;
                if (starY[i] < 0) {
                    starY[i] = height;
                    starX[i] = Math.random() * width;
                }

                const blink = Math.sin(time * 0.001 + starBlinkOffset[i]) * 0.3;
                const alpha = Math.max(0.1, Math.min(1, starBaseAlpha[i] + blink));

                ctx.fillStyle = starTints[i] === 1 ? `rgba(253, 237, 211, ${alpha})` : `rgba(255, 255, 255, ${alpha})`;
                ctx.beginPath();
                ctx.arc(starX[i], starY[i], starSize[i] * starZ[i] * 0.5, 0, Math.PI * 2);
                ctx.fill();
            }

            if (!meteorActive && Math.random() < 0.002) {
                meteorActive = true;
                meteorX = Math.random() * width * 1.5;
                meteorY = -100;
                meteorLen = Math.random() * 100 + 100;
                meteorSpeed = Math.random() * 15 + 15;
                meteorAngle = Math.PI / 4 + (Math.random() * 0.2 - 0.1);
                meteorLife = 1.0;
            }

            if (meteorActive) {
                const dx = Math.cos(meteorAngle) * meteorSpeed;
                const dy = Math.sin(meteorAngle) * meteorSpeed;
                meteorX -= dx;
                meteorY += dy;
                meteorLife -= 0.015;

                const grad = ctx.createLinearGradient(meteorX, meteorY, meteorX + Math.cos(meteorAngle) * meteorLen, meteorY - Math.sin(meteorAngle) * meteorLen);
                grad.addColorStop(0, `rgba(255, 255, 255, ${Math.max(0, meteorLife)})`);
                grad.addColorStop(0.2, `rgba(237, 123, 15, ${Math.max(0, meteorLife * 0.8)})`);
                grad.addColorStop(1, 'transparent');

                ctx.strokeStyle = grad;
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.moveTo(meteorX, meteorY);
                ctx.lineTo(meteorX + Math.cos(meteorAngle) * meteorLen, meteorY - Math.sin(meteorAngle) * meteorLen);
                ctx.stroke();

                if (meteorLife <= 0 || meteorY > height || meteorX < 0) {
                    meteorActive = false;
                }
            }

            animationFrameId = requestAnimationFrame(renderLoop);
        };

        const handleResize = () => {
            cancelAnimationFrame(animationFrameId);
            init();
        };

        const handleVisibilityChange = () => {
            isInactive = document.hidden;
            if (!isInactive && !isMobile) {
                animationFrameId = requestAnimationFrame(renderLoop);
            }
        };

        const mqInfo = window.matchMedia('(prefers-reduced-motion: reduce)');
        const handleMotionChange = (e: MediaQueryListEvent) => {
            if (e.matches) {
                cancelAnimationFrame(animationFrameId);
            } else {
                init();
            }
        };

        if (!mqInfo.matches) {
            init();
        } else if (!isMobile) {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            ctx.fillStyle = '#020202';
            ctx.fillRect(0, 0, width, height);
        }

        window.addEventListener('resize', handleResize);
        document.addEventListener('visibilitychange', handleVisibilityChange);
        mqInfo.addEventListener('change', handleMotionChange);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            mqInfo.removeEventListener('change', handleMotionChange);
        };
    }, []);

    return (
        <canvas
            id="global-space"
            className="fixed inset-0 w-full h-full pointer-events-none -z-[100]"
            style={{ display: 'block' }}
        />
    );
}
