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
      source={require('../assets/hooka-marivo-guide-app-background.png')}
      resizeMode="cover"
      style={styles.QuizScreenRootChassis}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.QuizScreenHeaderArt}>
          <Text style={styles.QuizScreenHeaderTitleFiligree}>Quiz</Text>
          {phase === 'question' && (
            <Pressable hitSlop={8} onPress={() => setLeaveModalVisible(true)}>
              <Image
                source={require('../assets/hooka-marivo-guide-icon-close.png')}
                resizeMode="contain"
                style={styles.QuizScreenHeaderCloseIconSigil}
              />
            </Pressable>
          )}
        </View>

        {phase === 'intro' && (
          <View style={styles.QuizScreenIntroContentChassis}>
            <View style={styles.QuizScreenMascotBadgePortico}>
              <Image
                source={require('../assets/hooka-marivo-guide-icon-question.png')}
                resizeMode="contain"
                style={styles.QuizScreenMascotIconFiligree}
              />
            </View>
            <Text style={styles.QuizScreenIntroTitleFiligree}>
              Test Your Knowledge
            </Text>
            <Text style={styles.QuizScreenIntroBodyFiligree}>
              {`Answer questions inspired by the articles on fishing history. ${QUIZ_TOPICS.length} questions total — see how many you can get right!`}
            </Text>
            <View style={styles.QuizScreenIntroButtonWrapPortico}>
              <PrimaryButton label="Start Quiz" onPress={startQuiz} />
            </View>
          </View>
        )}

        {phase === 'question' && currentQuestion && (
          <ScrollView
            contentContainerStyle={styles.QuizScreenQuestionContentChassis}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.QuizScreenProgressRowFiligree}>
              <ArticleTagBadge
                label={`${currentIndex + 1} / ${sessionQuestions.length}`}
              />
            </View>

            <Text style={styles.QuizScreenQuestionPromptFiligree}>
              {currentQuestion.question}
            </Text>

            <View style={styles.QuizScreenHeroChassis}>
              {currentArticle?.hero ? (
                <Image
                  source={currentArticle.hero}
                  resizeMode="cover"
                  style={styles.QuizScreenHeroImageArt}
                />
              ) : null}
            </View>

            <View style={styles.QuizScreenOptionsColFiligree}>
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
              <View style={styles.QuizScreenNextButtonWrapPortico}>
                <PrimaryButton
                  label="Next Question"
                  onPress={goToNextQuestion}
                />
              </View>
            )}
          </ScrollView>
        )}

        {phase === 'complete' && (
          <View style={styles.QuizScreenIntroContentChassis}>
            <View style={styles.QuizScreenMascotBadgePortico}>
              <Image
                source={require('../assets/hooka-marivo-guide-icon-trophy.png')}
                resizeMode="contain"
                style={styles.QuizScreenMascotIconFiligree}
              />
            </View>
            <Text style={styles.QuizScreenIntroTitleFiligree}>
              Quiz Complete!
            </Text>
            <Text style={styles.QuizScreenIntroBodyFiligree}>
              {`You scored ${score} out of ${sessionQuestions.length}`}
            </Text>
            <View style={styles.QuizScreenIntroButtonWrapPortico}>
              <PrimaryButton label="Restart Quiz" onPress={startQuiz} />
            </View>
          </View>
        )}

        <Modal visible={leaveModalVisible} transparent animationType="fade">
          <View style={styles.QuizScreenLeaveOverlayArt}>
            <View style={styles.QuizScreenLeaveCardChassis}>
              <Text style={styles.QuizScreenLeaveTitleFiligree}>
                Leave Quiz?
              </Text>
              <Text style={styles.QuizScreenLeaveBodyFiligree}>
                Your current progress will be lost.
              </Text>
              <View style={styles.QuizScreenLeaveButtonRowFiligree}>
                <Pressable
                  onPress={() => setLeaveModalVisible(false)}
                  style={[
                    styles.QuizScreenLeaveButtonPortico,
                    styles.QuizScreenLeaveButtonStayPortico,
                  ]}
                >
                  <Text style={styles.QuizScreenLeaveButtonLabelLight}>
                    Stay
                  </Text>
                </Pressable>
                <Pressable
                  onPress={confirmLeaveQuiz}
                  style={[
                    styles.QuizScreenLeaveButtonPortico,
                    styles.QuizScreenLeaveButtonLeavePortico,
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
        styles.QuizOptionRowFacet,
        isRevealedCorrect && styles.QuizOptionRowFacetCorrectGreen,
        isWrongSelection && styles.QuizOptionRowFacetWrongRed,
        isDimmed && styles.QuizOptionRowFacetDimmedFiligree,
      ]}
    >
      <Text
        style={[
          styles.QuizOptionRowLabelPortico,
          isDimmed && styles.QuizOptionRowLabelDimmedFiligree,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  QuizScreenRootChassis: {
    flex: 1,
  },

  QuizScreenHeaderArt: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: layout.screenPaddingHorizontal,
    paddingTop: 54,
  },

  QuizScreenHeaderTitleFiligree: {
    color: colors.gold,
    fontFamily: fonts.sansExtraBold,
    fontSize: fontSize.title + 4,
    fontWeight: '800',
  },
  QuizScreenHeaderCloseIconSigil: {
    height: 20,
    width: 20,
  },
  QuizScreenIntroContentChassis: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: layout.screenPaddingHorizontal,
  },

  QuizScreenMascotBadgePortico: {
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
  QuizScreenMascotIconFiligree: {
    height: 72,
    tintColor: colors.gold,
    width: 72,
  },

  QuizScreenIntroTitleFiligree: {
    color: colors.gold,
    fontFamily: fonts.sansExtraBold,
    fontSize: fontSize.title + 4,
    fontWeight: '800',
    textAlign: 'center',
  },

  QuizScreenIntroBodyFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansRegular,
    fontSize: fontSize.body,
    lineHeight: 21,
    marginTop: 12,
    opacity: 0.85,
    textAlign: 'center',
  },

  QuizScreenIntroButtonWrapPortico: {
    marginTop: 28,
    width: '100%',
  },

  QuizScreenQuestionContentChassis: {
    paddingBottom: 40,
    paddingHorizontal: layout.screenPaddingHorizontal,
    paddingTop: 18,
  },
  QuizScreenProgressRowFiligree: {
    marginBottom: 14,
  },
  QuizScreenQuestionPromptFiligree: {
    color: colors.gold,
    fontFamily: fonts.sansExtraBold,
    fontSize: fontSize.title,
    fontWeight: '800',
    lineHeight: 26,
    marginBottom: 16,
  },

  QuizScreenHeroChassis: {
    alignItems: 'center',
    backgroundColor: colors.deepTeal,
    borderRadius: 16,
    height: 190,
    justifyContent: 'center',
    marginBottom: 18,
    overflow: 'hidden',
    width: '100%',
  },
  QuizScreenHeroImageArt: {
    height: '100%',
    width: '100%',
  },
  QuizScreenOptionsColFiligree: {
    gap: 12,
  },
  QuizScreenNextButtonWrapPortico: {
    marginTop: 20,
  },
  QuizOptionRowFacet: {
    backgroundColor: 'rgba(10, 78, 88, 0.9)',
    borderRadius: 14,
    paddingHorizontal: 18,
    paddingVertical: 16,
  },

  QuizOptionRowFacetCorrectGreen: {
    backgroundColor: colors.green,
  },
  QuizOptionRowFacetWrongRed: {
    backgroundColor: colors.red,
  },
  QuizOptionRowFacetDimmedFiligree: {
    backgroundColor: 'rgba(10, 78, 88, 0.45)',
  },
  QuizOptionRowLabelPortico: {
    color: colors.white,
    fontFamily: fonts.sansSemiBold,
    fontSize: 15,
    fontWeight: '600',
  },

  QuizOptionRowLabelDimmedFiligree: {
    opacity: 0.4,
  },
  QuizScreenLeaveOverlayArt: {
    alignItems: 'center',
    backgroundColor: 'rgba(6, 32, 36, 0.7)',
    flex: 1,
    justifyContent: 'center',
    padding: 32,
  },
  QuizScreenLeaveCardChassis: {
    backgroundColor: colors.deepTeal,
    borderColor: colors.teal,
    borderRadius: 20,
    borderWidth: 1,
    padding: 24,
    width: '100%',
  },

  QuizScreenLeaveTitleFiligree: {
    color: colors.gold,
    fontFamily: fonts.sansExtraBold,
    fontSize: fontSize.title,
    fontWeight: '800',
    textAlign: 'center',
  },
  QuizScreenLeaveBodyFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansRegular,
    fontSize: fontSize.body,
    marginTop: 8,
    opacity: 0.85,
    textAlign: 'center',
  },
  QuizScreenLeaveButtonRowFiligree: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 20,
  },
  QuizScreenLeaveButtonPortico: {
    alignItems: 'center',
    borderRadius: 14,
    flex: 1,
    paddingVertical: 12,
  },
  QuizScreenLeaveButtonStayPortico: {
    backgroundColor: colors.green,
  },
  QuizScreenLeaveButtonLeavePortico: {
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
