import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mic, Headphones, Volume2, Languages, Presentation, Sparkles } from "lucide-react";
import infoImg from "./assets/info.jpg";
import monitoringImg from "./assets/monitoring.jpg";
import parametersImg from "./assets/parameters.jpg";

export default function RevoxiLandingPage() {
    const screenshots  = [
        infoImg,
        monitoringImg,
        parametersImg,
    ];
    const [currentScreenshot, setCurrentScreenshot] = useState(0);

    const colors = {
        background: "#F6F1E8",
        surface: "#CFEFE3",
        accent: "#B8A8D9",
        border: "#393836"
    };

    const features = [
        {
            icon: Mic,
            title: "Контроль дикции",
            description: "Слушайте свою речь в реальном времени и улучшаете произношение.",
        },
        {
            icon: Volume2,
            title: "Контроль громкости",
            description: "Отслеживайте силу голоса, избегайте перегрузки и нехватки воздуха.",
        },
        {
            icon: Languages,
            title: "Изучение языков",
            description: "Практикуйте правильное произношение и ритм речи.",
        },
    ];

    const useCases = [
        {
            icon: Presentation,
            title: "Подготовка выступлений",
        },
        {
            icon: Sparkles,
            title: "Тренировка речи",
        },
        {
            icon: Headphones,
            title: "Работа с голосом",
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentScreenshot(prev =>
                (prev + 1) % screenshots.length
            );
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="min-h-screen w-full"
            style={{ backgroundColor: colors.background }}
        >
            {/* HERO */}
            <section className="px-6 py-16 md:py-24 max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="grid md:grid-cols-2 gap-10 items-center"
                >
                    <div>
                        <h1 className="text-4xl text-center md:text-5xl md:text-left font-bold leading-tight mb-6">
                            Слушайте свою речь{" "}
                            <span
                                className="inline md:block mt-2"
                                style={{ color: colors.accent }}
                            >
                в реальном времени
              </span>
                        </h1>

                        <p className="text-lg text-center md:text-xl md:text-left opacity-80 mb-8">
                            ReVoxi помогает контролировать голос, дикцию и темп речи во время
                            разговора, чтения или тренировки произношения.
                        </p>

                        <div className="flex text-center flex-col md:text-left sm:flex-row gap-4">
                            <a href="https://www.rustore.ru/catalog/app/com.example.re_voxi" target="_blank" rel="noopener noreferrer">
                                <Button
                                    className="text-base px-6 py-6 rounded-2xl shadow-md"
                                    style={{ backgroundColor: colors.accent }}
                                >
                                    Скачать приложение
                                </Button>
                            </a>
                        </div>
                    </div>

                    {/* Phone mock */}
                    <div className="flex justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="w-[260px] h-[560px] rounded-[32px] shadow-2xl overflow-hidden flex items-center justify-center text-center p-[10px]"
                            style={{ backgroundColor: colors.border }}
                        >
                            <div className="w-full h-full overflow-hidden rounded-[24px]">
                                <motion.div
                                    className="flex w-full h-full"
                                    animate={{
                                        x: `-${currentScreenshot * 100}%`,
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        ease: "easeInOut",
                                    }}
                                >
                                    {screenshots.map((src, index) => (
                                        <div key={index} className="min-w-full h-full flex-shrink-0">
                                            <img
                                                src={src}
                                                alt="Screenshot"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* FEATURES */}
            <section className="px-6 py-16 max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
                    Возможности
                </h2>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <Card className="rounded-2xl shadow-sm h-full">
                                    <CardContent className="p-6">
                                        <Icon
                                            size={28}
                                            className="mb-4"
                                            style={{ color: colors.accent }}
                                        />

                                        <h3 className="text-lg font-medium mb-2">
                                            {feature.title}
                                        </h3>

                                        <p className="opacity-70 text-sm">
                                            {feature.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* USE CASES */}
            <section
                className="px-6 py-16"
                style={{ backgroundColor: colors.surface }}
            >
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
                        Для чего подходит ReVoxi
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {useCases.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={index}
                                    className="flex flex-col items-center text-center gap-4 p-6"
                                >
                                    <Icon
                                        size={32}
                                        style={{ color: colors.accent }}
                                    />

                                    <p className="font-medium">
                                        {item.title}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-6 py-20 max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                        Услышьте свой голос
                        <span
                            className="block mt-2"
                            style={{ color: colors.accent }}
                        >
              уже сегодня
            </span>
                    </h2>
                    <a href="https://www.rustore.ru/catalog/app/com.example.re_voxi" target="_blank" rel="noopener noreferrer">
                        <Button
                            className="text-lg px-8 py-6 rounded-2xl shadow-lg"
                            style={{ backgroundColor: colors.accent }}
                        >
                            Скачать ReVoxi
                        </Button>
                    </a>
                </motion.div>
            </section>

            {/* FOOTER */}
            <footer className="px-6 py-10 text-center text-sm opacity-60">
                ReVoxi © {new Date().getFullYear()}
            </footer>
        </div>
    );
}