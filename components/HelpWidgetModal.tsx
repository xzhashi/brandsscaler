
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './common/Button';
import { Icons } from '../constants';
import { HELP_WIDGET_QUESTIONS, getServiceInfoBySlug } from '../data/helpWidgetData';
import { HelpWidgetQuestion, HelpWidgetQuestionOption, SuggestedServiceInfo } from '../types';
import LottieAnimation from './LottieAnimation';

interface HelpWidgetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HelpWidgetModal: React.FC<HelpWidgetModalProps> = ({ isOpen, onClose }) => {
  const [currentQuestionId, setCurrentQuestionId] = useState<string>('q1');
  const [suggestedService, setSuggestedService] = useState<SuggestedServiceInfo | null>(null);
  const [customMessage, setCustomMessage] = useState<string | null>(null);
  const [showSuggestion, setShowSuggestion] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setCurrentQuestionId('q1');
      setSuggestedService(null);
      setCustomMessage(null);
      setShowSuggestion(false);
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const currentQuestion = HELP_WIDGET_QUESTIONS.find(q => q.id === currentQuestionId);

  const handleOptionClick = (option: HelpWidgetQuestionOption) => {
    if (option.isFinal) {
      if (option.mapsToServiceSlug) {
        const serviceInfo = getServiceInfoBySlug(option.mapsToServiceSlug);
        setSuggestedService(serviceInfo);
        setCustomMessage(null);
      } else if (option.customMessage) {
        setCustomMessage(option.customMessage);
        setSuggestedService(null);
      }
      setShowSuggestion(true);
    } else if (option.nextQuestionId) {
      setCurrentQuestionId(option.nextQuestionId);
      setShowSuggestion(false);
    }
  };

  const resetWidget = () => {
    setCurrentQuestionId('q1');
    setSuggestedService(null);
    setCustomMessage(null);
    setShowSuggestion(false);
  };

  return (
    <div
      className="fixed inset-0 bg-brand-bg/70 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="help-widget-title"
    >
      <div className="bg-brand-surface p-6 sm:p-8 rounded-xl shadow-soft-lg w-full max-w-lg relative border border-brand-border">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-text-secondary hover:text-brand-primary transition-colors"
          aria-label="Close"
        >
          {React.cloneElement(Icons.CloseIcon as React.ReactElement<{ className?: string }>, { className: 'w-6 h-6' })}
        </button>

        {!showSuggestion && currentQuestion && (
          <>
            <h2 id="help-widget-title" className="text-xl sm:text-2xl font-semibold font-heading text-brand-text-primary mb-6 text-center">
              Let's Find Your Growth Solution!
            </h2>
            <div className="mb-6 text-center">
              <p className="text-lg text-brand-text-secondary">{currentQuestion.questionText}</p>
            </div>
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <Button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  variant="outline"
                  className="w-full justify-start text-left py-3 px-4 border-brand-border hover:border-brand-primary hover:bg-brand-primary/10"
                >
                  {option.text}
                </Button>
              ))}
            </div>
          </>
        )}

        {showSuggestion && (
          <div className="text-center animate-fade-in-up">
            {suggestedService ? (
              <>
                <div className="mb-4 inline-block p-3 bg-brand-primary/10 rounded-full">
                   {React.isValidElement(suggestedService.icon) ? React.cloneElement(suggestedService.icon as React.ReactElement<{ className?: string }>, { className: 'w-10 h-10 text-brand-primary' }) : null}
                </div>
                <h2 id="help-widget-title" className="text-xl sm:text-2xl font-semibold font-heading text-brand-text-primary mb-3">
                  We recommend our <span className="text-brand-primary">{suggestedService.title}</span> service!
                </h2>
                <p className="text-brand-text-secondary mb-6 text-sm leading-relaxed">
                  Based on your answers, our {suggestedService.title} offerings, which focus on "{suggestedService.description.substring(0, 100)}...", seem like a great fit to help you achieve your goals.
                </p>
              </>
            ) : customMessage ? (
              <>
                 <div className="mb-4">
                    <LottieAnimation src="https://assets2.lottiefiles.com/packages/lf20_gjmecwii.json" style={{ width: '100px', height: '100px', margin: '0 auto' }}/>
                </div>
                <h2 id="help-widget-title" className="text-xl sm:text-2xl font-semibold font-heading text-brand-text-primary mb-3">Let's Explore Together!</h2>
                <p className="text-brand-text-secondary mb-6 leading-relaxed">{customMessage}</p>
              </>
            ) : null}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                as={Link}
                to="/contact"
                onClick={onClose} 
                variant="primary"
                size="lg"
              >
                Book a Free Consultation
              </Button>
              <Button onClick={resetWidget} variant="subtle" size="lg">
                Ask Again
              </Button>
            </div>
          </div>
        )}
         <p className="text-xs text-brand-text-secondary/70 text-center mt-6">
            Powered by BrandsScaler & BlindTech.in
        </p>
      </div>
    </div>
  );
};

export default HelpWidgetModal;
