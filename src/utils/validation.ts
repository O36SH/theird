export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPassword = (password: string): boolean => {
  return password.length >= 8;
};

export const getPasswordStrength = (password: string): {
  score: number;
  feedback: string;
} => {
  let score = 0;
  const feedback: string[] = [];

  if (password.length >= 8) score++;
  if (password.match(/[A-Z]/)) score++;
  if (password.match(/[a-z]/)) score++;
  if (password.match(/[0-9]/)) score++;
  if (password.match(/[^A-Za-z0-9]/)) score++;

  if (score < 2) {
    feedback.push('كلمة المرور ضعيفة جداً');
  } else if (score < 3) {
    feedback.push('كلمة المرور ضعيفة');
  } else if (score < 4) {
    feedback.push('كلمة المرور متوسطة');
  } else {
    feedback.push('كلمة المرور قوية');
  }

  return {
    score,
    feedback: feedback.join('. '),
  };
};