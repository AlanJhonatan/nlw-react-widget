import { CloseButton } from "../CloseButton";

import { useState } from "react";
import bugImageUrl from '../../assets/bug.png';
import ideiaImageUrl from '../../assets/ideia.png';
import thoughtImageUrl from '../../assets/thought.png';
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideiaImageUrl,
      alt: 'Imagem de uma ideia'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de um balão de pensamento'
    }
  },
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>();

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>

      {!feedbackType
        ? (<FeedbackTypeStep setFeedbackType={setFeedbackType} />)
        : (<FeedbackContentStep />)
      }
        
        <footer className="text-xs text-neutral-400">
          Feito com ♥ pela <a href="http://rocketseat.com.br" className="underline underline-offset-2">Rocketseat</a>
        </footer>
      </div>
  )
}