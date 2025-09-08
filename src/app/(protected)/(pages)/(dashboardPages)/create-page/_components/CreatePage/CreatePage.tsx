"use client";

import { Button } from "@/components/ui/button";
import {
  containerVariants,
  CreatePageCard,
  itemVariants,
} from "@/lib/constants";
import usePromptStore from "@/store/usePromptStore";
import { motion } from "framer-motion";

type Props = {
  onSelectOption: (option: string) => void;
};

const CreatePage = ({ onSelectOption }: Props) => {
  const {} = usePromptStore();
  return (
    <motion.div initial="hidden" animate="visible">
      <motion.div
        variants={{
          hidden: { y: 20, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 100,
            },
          },
        }}
        className="text-center space-y-2"
      >
        <h1 className="text-4xl font-bold text-primary">
          How would you like to get started?
        </h1>
        <p className="text-stone-500">Choose your preferred method to begin</p>
      </motion.div>
      <motion.div
        variants={containerVariants}
        className="grid gap-6 lg:grid-cols-3 mt-4"
      >
        {CreatePageCard.map((option) => (
          <motion.div
            key={option.type}
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  stiffness: 100,
                },
              },
            }}
            whileHover={{
              scale: 1.05,
              rotate: 1,
              transition: { duration: 0.1 },
            }}
            className={`${
              option.highlight
                ? "bg-vivid-gradient"
                : "hover:bg-vivid-gradient border"
            } rounded-xl p-[1px] transition-all duration-300 ease-in-out w-full min-w-60 max-w-[90%] mx-auto`}
          >
            <motion.div
              className="w-full p-4 flex flex-col gap-y-6 items-start bg-white dark:bg-black rounded-xl"
              whileHover={{ transition: { duration: 0.1 } }}
            >
              <div className="flex flex-col items-start w-full gap-y-3">
                <div>
                  <p className="text-primary text-lg font-semibold">
                    {option.title}
                  </p>
                  <p
                    className={`${
                      option.highlight ? "text-vivid" : "text-primary"
                    } text-4xl font-bold`}
                  >
                    {option.highlightedText}
                  </p>
                </div>
                <p className="text-stone-500 text-sm font-normal">
                  {option.description}
                </p>
              </div>
              <motion.div
                className="self-end"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={option.highlight ? "default" : "outline"}
                  className="w-fit rounded-xl font-bold"
                  size={"sm"}
                  onClick={() => onSelectOption(option.type)}
                >
                  {option.highlight ? "Generate" : "Continue"}
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default CreatePage;
