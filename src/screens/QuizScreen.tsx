import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { ArticleTagBadge } from '../components/articles/ArticleTagBadge';
import { PrimaryButton } from '../components/buttons/PrimaryButton';
import { colors, fonts, fontSize, layout } from '../constants/theme';
import { useQuiz } from '../context/QuizContext';
import { getArticleById } from '../data/articles';
import {
  buildQuizSession,
  QUIZ_TOPICS,
  type QuizSessionQuestion,
} from '../data/quiz';

type QuizPhase = 'intro' | 'question' | 'complete';

export function QuizScreen() {
  const { addPoints } = useQuiz();
  const [phase, setPhase] = useState<QuizPhase>('intro');
  const [sessionQuestions, setSessionQuestions] = useState<
    QuizSessionQuestion[]
  >([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [leaveModalVisible, setLeaveModalVisible] = useState(false);

  const startQuiz = () => {
    setSessionQuestions(buildQuizSession());
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setPhase('question');
  };

  const selectOption = (option: string) => {
    if (selectedAnswer) {
      return;
    }
    setSelectedAnswer(option);
    if (option === sessionQuestions[currentIndex].correctAnswer) {
      setScore(current => current + 1);
    }
  };

  const goToNextQuestion = () => {
    const isLastQuestion = currentIndex >= sessionQuestions.length - 1;
    if (isLastQuestion) {
      addPoints(score);
      setPhase('complete');
      return;
    }
    setCurrentIndex(current => current + 1);
    setSelectedAnswer(null);
  };

  const confirmLeaveQuiz = () => {
    setLeaveModalVisible(false);
    setPhase('intro');
  };

  const currentQuestion = sessionQuestions[currentIndex];
  const currentArticle = currentQuestion
    ? getArticleById(currentQuestion.articleId)
    : undefined;

  return (
    <ImageBackground
      source={require('../assets/marivo_app_background.png')}
      resizeMode="cover"
      style={styles.QuizScreenRootTide}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.QuizScreenHeaderLintel}>
          <Text style={styles.QuizScreenHeaderTitleLantern}>Quiz</Text>
          {phase === 'question' && (
            <Pressable hitSlop={8} onPress={() => setLeaveModalVisible(true)}>
              <Image
                source={require('../assets/marivo_icon_close.png')}
                resizeMode="contain"
                style={styles.QuizScreenHeaderCloseIconCompass}
              />
            </Pressable>
          )}
        </View>

        {phase === 'intro' && (
          <View style={styles.QuizScreenIntroContentHarbor}>
            <View style={styles.QuizScreenMascotBadgeAnchor}>
              <Image
                source={require('../assets/marivo_icon_question.png')}
                resizeMode="contain"
                style={styles.QuizScreenMascotIconLantern}
              />
            </View>
            <Text style={styles.QuizScreenIntroTitleLantern}>
              Test Your Knowledge
            </Text>
            <Text style={styles.QuizScreenIntroBodyDriftwood}>
              {`Answer questions inspired by the articles on fishing history. ${QUIZ_TOPICS.length} questions total — see how many you can get right!`}
            </Text>
            <View style={styles.QuizScreenIntroButtonWrapVoyage}>
              <PrimaryButton label="Start Quiz" onPress={startQuiz} />
            </View>
          </View>
        )}

        {phase === 'question' && currentQuestion && (
          <ScrollView
            contentContainerStyle={styles.QuizScreenQuestionContentHarbor}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.QuizScreenProgressRowHorizon}>
              <ArticleTagBadge
                label={`${currentIndex + 1} / ${sessionQuestions.length}`}
              />
            </View>

            <Text style={styles.QuizScreenQuestionPromptLantern}>
              {currentQuestion.question}
            </Text>

            <View style={styles.QuizScreenHeroReef}>
              {currentArticle?.hero ? (
                <Image
                  source={currentArticle.hero}
                  resizeMode="cover"
                  style={styles.QuizScreenHeroImageCurrent}
                />
              ) : (
                <View style={styles.QuizScreenHeroPlaceholderFathom} />
              )}
            </View>

            <View style={styles.QuizScreenOptionsColFathom}>
              {currentQuestion.options.map(option => (
                <QuizOptionRow
                  key={option}
                  label={option}
                  selectedAnswer={selectedAnswer}
                  correctAnswer={currentQuestion.correctAnswer}
                  onPress={() => selectOption(option)}
                />
              ))}
            </View>

            {selectedAnswer && (
              <View style={styles.QuizScreenNextButtonWrapVoyage}>
                <PrimaryButton
                  label="Next Question"
                  onPress={goToNextQuestion}
                />
              </View>
            )}
          </ScrollView>
        )}

        {phase === 'complete' && (
          <View style={styles.QuizScreenIntroContentHarbor}>
            <View style={styles.QuizScreenMascotBadgeAnchor}>
              <Image
                source={require('../assets/marivo_icon_trophy.png')}
                resizeMode="contain"
                style={styles.QuizScreenMascotIconLantern}
              />
            </View>
            <Text style={styles.QuizScreenIntroTitleLantern}>
              Quiz Complete!
            </Text>
            <Text style={styles.QuizScreenIntroBodyDriftwood}>
              {`You scored ${score} out of ${sessionQuestions.length}`}
            </Text>
            <View style={styles.QuizScreenIntroButtonWrapVoyage}>
              <PrimaryButton label="Restart Quiz" onPress={startQuiz} />
            </View>
          </View>
        )}

        <Modal visible={leaveModalVisible} transparent animationType="fade">
          <View style={styles.QuizScreenLeaveOverlayCurrent}>
            <View style={styles.QuizScreenLeaveCardReef}>
              <Text style={styles.QuizScreenLeaveTitleLantern}>
                Leave Quiz?
              </Text>
              <Text style={styles.QuizScreenLeaveBodyDriftwood}>
                Your current progress will be lost.
              </Text>
              <View style={styles.QuizScreenLeaveButtonRowHorizon}>
                <Pressable
                  onPress={() => setLeaveModalVisible(false)}
                  style={[
                    styles.QuizScreenLeaveButtonAnchor,
                    styles.QuizScreenLeaveButtonStayVoyage,
                  ]}
                >
                  <Text style={styles.QuizScreenLeaveButtonLabelLight}>
                    Stay
                  </Text>
                </Pressable>
                <Pressable
                  onPress={confirmLeaveQuiz}
                  style={[
                    styles.QuizScreenLeaveButtonAnchor,
                    styles.QuizScreenLeaveButtonLeaveVoyage,
                  ]}
                >
                  <Text style={styles.QuizScreenLeaveButtonLabelCream}>
                    Leave
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </ImageBackground>
  );
}

type QuizOptionRowProps = {
  label: string;
  selectedAnswer: string | null;
  correctAnswer: string;
  onPress: () => void;
};

function QuizOptionRow({
  label,
  selectedAnswer,
  correctAnswer,
  onPress,
}: QuizOptionRowProps) {
  const isAnswered = selectedAnswer !== null;
  const isCorrectOption = label === correctAnswer;
  const isSelectedOption = label === selectedAnswer;
  const isWrongSelection = isAnswered && isSelectedOption && !isCorrectOption;
  const isRevealedCorrect = isAnswered && isCorrectOption;
  const isDimmed = isAnswered && !isSelectedOption && !isCorrectOption;

  return (
    <Pressable
      onPress={onPress}
      disabled={isAnswered}
      style={[
        styles.QuizOptionRowHull,
        isRevealedCorrect && styles.QuizOptionRowHullCorrectGreen,
        isWrongSelection && styles.QuizOptionRowHullWrongRed,
        isDimmed && styles.QuizOptionRowHullDimmedFathom,
      ]}
    >
      <Text
        style={[
          styles.QuizOptionRowLabelVoyage,
          isDimmed && styles.QuizOptionRowLabelDimmedFathom,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  QuizScreenRootTide: {
    flex: 1,
  },
  QuizScreenHeaderLintel: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: layout.screenPaddingHorizontal,
    paddingTop: 54,
  },
  QuizScreenHeaderTitleLantern: {
    color: colors.gold,
    fontFamily: fonts.sansExtraBold,
    fontSize: fontSize.title + 4,
    fontWeight: '800',
  },
  QuizScreenHeaderCloseIconCompass: {
    height: 20,
    width: 20,
  },
  QuizScreenIntroContentHarbor: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: layout.screenPaddingHorizontal,
  },
  QuizScreenMascotBadgeAnchor: {
    alignItems: 'center',
    backgroundColor: colors.deepTeal,
    borderColor: 'rgba(30, 183, 200, 0.3)',
    borderRadius: 100,
    borderWidth: 1.5,
    height: 160,
    justifyContent: 'center',
    marginBottom: 24,
    width: 160,
  },
  QuizScreenMascotIconLantern: {
    height: 72,
    tintColor: colors.gold,
    width: 72,
  },
  QuizScreenIntroTitleLantern: {
    color: colors.gold,
    fontFamily: fonts.sansExtraBold,
    fontSize: fontSize.title + 4,
    fontWeight: '800',
    textAlign: 'center',
  },
  QuizScreenIntroBodyDriftwood: {
    color: colors.cream,
    fontFamily: fonts.sansRegular,
    fontSize: fontSize.body,
    lineHeight: 21,
    marginTop: 12,
    opacity: 0.85,
    textAlign: 'center',
  },
  QuizScreenIntroButtonWrapVoyage: {
    marginTop: 28,
    width: '100%',
  },
  QuizScreenQuestionContentHarbor: {
    paddingBottom: 40,
    paddingHorizontal: layout.screenPaddingHorizontal,
    paddingTop: 18,
  },
  QuizScreenProgressRowHorizon: {
    marginBottom: 14,
  },
  QuizScreenQuestionPromptLantern: {
    color: colors.gold,
    fontFamily: fonts.sansExtraBold,
    fontSize: fontSize.title,
    fontWeight: '800',
    lineHeight: 26,
    marginBottom: 16,
  },
  QuizScreenHeroReef: {
    alignItems: 'center',
    backgroundColor: colors.deepTeal,
    borderRadius: 16,
    height: 190,
    justifyContent: 'center',
    marginBottom: 18,
    overflow: 'hidden',
    width: '100%',
  },
  QuizScreenHeroImageCurrent: {
    height: '100%',
    width: '100%',
  },
  QuizScreenHeroPlaceholderFathom: {
    backgroundColor: colors.teal,
    borderRadius: 20,
    height: 40,
    opacity: 0.28,
    width: 40,
  },
  QuizScreenOptionsColFathom: {
    gap: 12,
  },
  QuizScreenNextButtonWrapVoyage: {
    marginTop: 20,
  },
  QuizOptionRowHull: {
    backgroundColor: 'rgba(10, 78, 88, 0.9)',
    borderRadius: 14,
    paddingHorizontal: 18,
    paddingVertical: 16,
  },
  QuizOptionRowHullCorrectGreen: {
    backgroundColor: colors.green,
  },
  QuizOptionRowHullWrongRed: {
    backgroundColor: colors.red,
  },
  QuizOptionRowHullDimmedFathom: {
    backgroundColor: 'rgba(10, 78, 88, 0.45)',
  },
  QuizOptionRowLabelVoyage: {
    color: colors.white,
    fontFamily: fonts.sansSemiBold,
    fontSize: 15,
    fontWeight: '600',
  },
  QuizOptionRowLabelDimmedFathom: {
    opacity: 0.4,
  },
  QuizScreenLeaveOverlayCurrent: {
    alignItems: 'center',
    backgroundColor: 'rgba(6, 32, 36, 0.7)',
    flex: 1,
    justifyContent: 'center',
    padding: 32,
  },
  QuizScreenLeaveCardReef: {
    backgroundColor: colors.deepTeal,
    borderColor: colors.teal,
    borderRadius: 20,
    borderWidth: 1,
    padding: 24,
    width: '100%',
  },
  QuizScreenLeaveTitleLantern: {
    color: colors.gold,
    fontFamily: fonts.sansExtraBold,
    fontSize: fontSize.title,
    fontWeight: '800',
    textAlign: 'center',
  },
  QuizScreenLeaveBodyDriftwood: {
    color: colors.cream,
    fontFamily: fonts.sansRegular,
    fontSize: fontSize.body,
    marginTop: 8,
    opacity: 0.85,
    textAlign: 'center',
  },
  QuizScreenLeaveButtonRowHorizon: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 20,
  },
  QuizScreenLeaveButtonAnchor: {
    alignItems: 'center',
    borderRadius: 14,
    flex: 1,
    paddingVertical: 12,
  },
  QuizScreenLeaveButtonStayVoyage: {
    backgroundColor: colors.green,
  },
  QuizScreenLeaveButtonLeaveVoyage: {
    backgroundColor: 'transparent',
    borderColor: colors.teal,
    borderWidth: 1.5,
  },
  QuizScreenLeaveButtonLabelLight: {
    color: colors.white,
    fontFamily: fonts.sansBold,
    fontSize: fontSize.button,
    fontWeight: '700',
  },
  QuizScreenLeaveButtonLabelCream: {
    color: colors.cream,
    fontFamily: fonts.sansBold,
    fontSize: fontSize.button,
    fontWeight: '700',
  },
});
