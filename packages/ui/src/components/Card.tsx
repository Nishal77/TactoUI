import React from 'react';
import { View, Text, type ViewProps } from 'react-native';
// import { cn } from '../utils/cn';

export interface CardProps extends ViewProps {
  children: React.ReactNode;
  className?: string;
}

export interface CardHeaderProps extends ViewProps {
  children: React.ReactNode;
  className?: string;
}

export interface CardContentProps extends ViewProps {
  children: React.ReactNode;
  className?: string;
}

export interface CardFooterProps extends ViewProps {
  children: React.ReactNode;
  className?: string;
}

export interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({
  children,
  className: _className,
  style,
  ...props
}: CardProps) {
  return (
    <View
      style={[
        {
          borderRadius: 8,
          borderWidth: 1,
          borderColor: '#e2e8f0',
          backgroundColor: '#ffffff',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.05,
          shadowRadius: 2,
          elevation: 1,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
}

export function CardHeader({
  children,
  className: _className,
  style,
  ...props
}: CardHeaderProps) {
  return (
    <View
      style={[
        {
          flexDirection: 'column',
          padding: 24,
          gap: 6,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
}

export function CardTitle({ children, className: _className }: CardTitleProps) {
  return (
    <Text
      style={{
        fontSize: 24,
        fontWeight: '600',
        lineHeight: 32,
        letterSpacing: -0.025,
        color: '#111827',
      }}
    >
      {children}
    </Text>
  );
}

export function CardDescription({
  children,
  className: _className,
}: CardDescriptionProps) {
  return (
    <Text
      style={{
        fontSize: 14,
        color: '#6b7280',
      }}
    >
      {children}
    </Text>
  );
}

export function CardContent({
  children,
  className: _className,
  style,
  ...props
}: CardContentProps) {
  return (
    <View
      style={[
        {
          padding: 24,
          paddingTop: 0,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
}

export function CardFooter({
  children,
  className: _className,
  style,
  ...props
}: CardFooterProps) {
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          padding: 24,
          paddingTop: 0,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
}
