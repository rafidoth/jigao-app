export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      answers: {
        Row: {
          answer: string
          answer_explanation: string | null
          created_at: string
          id: string
          questionID: string
        }
        Insert: {
          answer: string
          answer_explanation?: string | null
          created_at?: string
          id?: string
          questionID: string
        }
        Update: {
          answer?: string
          answer_explanation?: string | null
          created_at?: string
          id?: string
          questionID?: string
        }
        Relationships: [
          {
            foreignKeyName: "answers_questionID_fkey"
            columns: ["questionID"]
            isOneToOne: false
            referencedRelation: "questions"
            referencedColumns: ["id"]
          },
        ]
      }
      choices: {
        Row: {
          choiceNumber: number
          choiceText: string
          created_at: string
          id: string
          questionID: string | null
        }
        Insert: {
          choiceNumber: number
          choiceText: string
          created_at?: string
          id?: string
          questionID?: string | null
        }
        Update: {
          choiceNumber?: number
          choiceText?: string
          created_at?: string
          id?: string
          questionID?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "choices_questionID_fkey"
            columns: ["questionID"]
            isOneToOne: false
            referencedRelation: "questions"
            referencedColumns: ["id"]
          },
        ]
      }
      contexts: {
        Row: {
          content: string
          created_at: string
          id: string
          quizsetID: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          quizsetID: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          quizsetID?: string
        }
        Relationships: [
          {
            foreignKeyName: "contexts_quizsetID_fkey"
            columns: ["quizsetID"]
            isOneToOne: false
            referencedRelation: "quizsets"
            referencedColumns: ["id"]
          },
        ]
      }
      questions: {
        Row: {
          created_at: string
          difficulty: Database["public"]["Enums"]["difficultylevel"]
          id: string
          question: string
          quizsetID: string
          type: Database["public"]["Enums"]["questiontype"]
        }
        Insert: {
          created_at?: string
          difficulty: Database["public"]["Enums"]["difficultylevel"]
          id?: string
          question: string
          quizsetID: string
          type: Database["public"]["Enums"]["questiontype"]
        }
        Update: {
          created_at?: string
          difficulty?: Database["public"]["Enums"]["difficultylevel"]
          id?: string
          question?: string
          quizsetID?: string
          type?: Database["public"]["Enums"]["questiontype"]
        }
        Relationships: [
          {
            foreignKeyName: "questions_quizsetID_fkey"
            columns: ["quizsetID"]
            isOneToOne: false
            referencedRelation: "quizsets"
            referencedColumns: ["id"]
          },
        ]
      }
      quizsets: {
        Row: {
          created_at: string
          id: string
          title: string | null
          userId: string
          visibility: Database["public"]["Enums"]["visibility"]
        }
        Insert: {
          created_at?: string
          id?: string
          title?: string | null
          userId: string
          visibility: Database["public"]["Enums"]["visibility"]
        }
        Update: {
          created_at?: string
          id?: string
          title?: string | null
          userId?: string
          visibility?: Database["public"]["Enums"]["visibility"]
        }
        Relationships: [
          {
            foreignKeyName: "quizsets_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["userid"]
          },
        ]
      }
      test_participants: {
        Row: {
          created_at: string
          id: string
          joined_at: string | null
          score: number | null
          submitted_at: string | null
          testID: string
          userID: string
        }
        Insert: {
          created_at?: string
          id?: string
          joined_at?: string | null
          score?: number | null
          submitted_at?: string | null
          testID: string
          userID: string
        }
        Update: {
          created_at?: string
          id?: string
          joined_at?: string | null
          score?: number | null
          submitted_at?: string | null
          testID?: string
          userID?: string
        }
        Relationships: [
          {
            foreignKeyName: "test_participants_testID_fkey"
            columns: ["testID"]
            isOneToOne: false
            referencedRelation: "tests"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "test_participants_userID_fkey"
            columns: ["userID"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["userid"]
          },
        ]
      }
      tests: {
        Row: {
          created_at: string
          creatorID: string
          duration_minutes: number
          end_time: string
          id: string
          per_question_value: number
          quizsetID: string
          start_time: string
          timer_type: Database["public"]["Enums"]["timer_type"]
        }
        Insert: {
          created_at?: string
          creatorID: string
          duration_minutes: number
          end_time: string
          id?: string
          per_question_value?: number
          quizsetID: string
          start_time: string
          timer_type: Database["public"]["Enums"]["timer_type"]
        }
        Update: {
          created_at?: string
          creatorID?: string
          duration_minutes?: number
          end_time?: string
          id?: string
          per_question_value?: number
          quizsetID?: string
          start_time?: string
          timer_type?: Database["public"]["Enums"]["timer_type"]
        }
        Relationships: [
          {
            foreignKeyName: "tests_creatorID_fkey"
            columns: ["creatorID"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["userid"]
          },
          {
            foreignKeyName: "tests_quizsetID_fkey"
            columns: ["quizsetID"]
            isOneToOne: false
            referencedRelation: "quizsets"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          createdat: string | null
          email: string
          firstName: string | null
          imageUrl: string | null
          lastName: string | null
          role: Database["public"]["Enums"]["role"] | null
          userid: string
        }
        Insert: {
          createdat?: string | null
          email: string
          firstName?: string | null
          imageUrl?: string | null
          lastName?: string | null
          role?: Database["public"]["Enums"]["role"] | null
          userid: string
        }
        Update: {
          createdat?: string | null
          email?: string
          firstName?: string | null
          imageUrl?: string | null
          lastName?: string | null
          role?: Database["public"]["Enums"]["role"] | null
          userid?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      deleteSingleMCQ: {
        Args: {
          question_uuid: string
        }
        Returns: undefined
      }
      get_count_question_by_user: {
        Args: {
          user_id: string
        }
        Returns: number
      }
    }
    Enums: {
      difficultylevel: "easy" | "medium" | "hard"
      questiontype: "mcq" | "truefalse" | "short" | "fillintheblanks"
      role: "user" | "admin"
      timer_type: "global" | "individual"
      visibility: "public" | "private" | "restricted"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
